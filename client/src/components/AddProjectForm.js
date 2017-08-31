import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
UI design for project information input form
*/
// stateless Component with refs as callbacks function
export class AddProjectForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      createdAt: '',
			updateAt: '',
      name: '',
      safety_require: false,
      cyber_require: false,
      technical_mastery_status: {
				specification: {
					completeness: 4
				}
      }
    };
  }
  handleSubmit = (event) => {	// function for sumbit data
    event.preventDefault();
    console.log(this.state);
		this.props.onNewProject(this.state);
  };
  getCurrentDate() {
    // return the current date in string format of "yy-mm-dd"
    // For example, "2017-08-18"
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
    var date = now.getDate();
    return year + '-' + month + '-' + date;
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //console.log(value);
    const name = target.name;
    //console.log(this);
    this.setState({
      [name]: value
    });
  };
	handleSecondaryInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //console.log(value);
    const name = target.name.split('.');
		let firstName = name[0];
		let secondName = name[1];
    this.setState({
      [firstName]: {
				[secondName]: value
			}
    });
  };
	handleThirdLevelInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //console.log(value);
		console.log(value);
    const name = target.name.split('.');
		let firstName = name[0];
		let secondName = name[1];
		let thirdName = name[2];
    this.setState({
      [firstName]: {
				[secondName]: {
					[thirdName]: value
				}
			}
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='add-project-form'>
				<label htmlFor='projectName'> Project name</label>
				<input id='projectName'
          name='name'
					value={this.state.name}
					onChange={this.handleInputChange}
          type='text'
          required
          autoFocus= 'true'>
				 </input>

				<label htmlFor='createdAt'>Create date</label>
				<input id='createdAt'
           type='date'
           required
           name='createdAt'
           value={this.state.createdAt}
           onChange={this.handleInputChange}/>

				 <label htmlFor='updateAt'>Update date</label>
				<input id='updateAt'
	          type='date'
	          required
	          name='updateAt'
	          value={this.state.updateAt}
	          onChange={this.handleInputChange}/>

         <div>
           <input
             id = 'safety_require'
             name='safety_require'
             type='checkbox'
             checked={this.state.safety_require}
             onChange={this.handleInputChange}/>
           <label htmlFor='safety_require'>
             Do you have Saftey Certification Requirement in your project?
           </label>
       </div>
         <br/>

				<div>
					<input id='cyber_require'
            name='cyber_require'
            type='checkbox'
            checked={this.state.cyber_require}
            onChange={this.handleInputChange}/>
					<label htmlFor='cyber_require'>
						Do you have Cyber Security Requirement in your project?
					</label>
				</div>

        <div>
				<label>
          Completeness of technical mastery status
          <select value={this.state.technical_mastery_status.specification.completeness}
            onChange={this.handleThirdLevelInputChange}
						name='technical_mastery_status.specification.completeness'>
            <option value = {1}>Complete</option>
            <option value = {2}>Minor information missing</option>
            <option value = {3}>Major information missing</option>
            <option value = {4}>No document</option>
          </select>
        </label>
        </div>

				<input type='submit' value='Submit' />
			</form>
     );
  }
}


AddProjectForm.propTypes = {	// validate properties type
  onNewProject: PropTypes.func.isRequired,
};
