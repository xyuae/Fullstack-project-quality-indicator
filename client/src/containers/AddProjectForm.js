import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/style.css';
import { Container } from '../styled/AddProjectForm';
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
          completeness: 4,
          review_done: 2
        },
        archi_global: {
          completeness: 4,
          bricks_used: 2,
          fmea_done: 2,
          review_done: 2
        }
      },
      safety_status: {
        well_identified: 2,
        design_fmea: 2,
        requirement_from_hw: 2,
        traceability: 2
      },
      cyber_status: {
        well_identified: 2,
        verification_report: 2
      },
      development_mastery_status: {
        quality: {
          quality_plan: 2,
          regularly_monitored: 3
        },
        requirement_org: {
          management_tool: 2,
          traceability: 2
        },
        development_org: {
          plan: 4,
          plan_exist: 2,
          plan_monitored: 2,
          review_report: 2
        },
        config_management: {
          management_plan: 4,
          config_tool: 2,
          change_tool: 2,
          version_report: 2,
          release_plan: 2,
          config_audit: 2,
          review_report: 2
        },
        design_test_strategy: {
          verif_plan: 2,
          verif_report: 2
        }
      }
    };
  }
  handleSubmit = (event) => {	// function for sumbit data
    event.preventDefault();
    //console.log(this.state);
    this.props.onNewProject(this.state);
    alert('Project Submitted');
    
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
    let updateObject = this.state;
    updateObject[firstName][secondName] = value;
    this.setState({
      updateObject
    });
  };
  handleThirdLevelInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //console.log(value);
    //console.log(this.state);
    const name = target.name.split('.');
    let firstName = name[0];
    let secondName = name[1];
    let thirdName = name[2];
    let updateObject = this.state;
    updateObject[firstName][secondName][thirdName] = value;
    this.setState({
      updateObject
    });

  };
  render() {
    return (
      <Container className='form'>
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
         <br/>

				<label htmlFor='createdAt'>Create date</label>
				<input id='createdAt'
           type='date'
           required
           name='createdAt'
           value={this.state.createdAt}
           onChange={this.handleInputChange}/>
         <br/>

				 <label htmlFor='updateAt'>Update date</label>
				 <input id='updateAt'
	          type='date'
	          required
	          name='updateAt'
	          value={this.state.updateAt}
	          onChange={this.handleInputChange}/>
          <br/>

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
          <h2>Technical Mastery Status</h2>
          <div>
            <h3>Specification</h3>
              <label>
                Functional specification document completeness?
                <select value={this.state.technical_mastery_status.specification.completeness}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.specification.completeness'>
                  <option value = {1}>Complete</option>
                  <option value = {2}>Minor information missing</option>
                  <option value = {3}>Major information missing</option>
                  <option value = {4}>No document</option>
                </select>
              </label>
              <br/>

              <label>
                Reviews done?
                <select value={this.state.technical_mastery_status.specification.review_done}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.specification.review_done'>
                  <option value = {1}>Existing review report</option>
                  <option value = {2}>No review report</option>
                </select>
              </label>
          </div>

          <div>
            <h3>Architecture & Global Design</h3>

              <label>
                Architecture & Global Design document completeness?
                <select value={this.state.technical_mastery_status.archi_global.completeness}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.archi_global.completeness'>
                  <option value = {1}>Complete</option>
                  <option value = {2}>Minor information missing</option>
                  <option value = {3}>Major information missing</option>
                  <option value = {4}>No document</option>
                </select>
              </label>
              <br/>

              <label>
                Bricks used (GAIA, …)?
                <select value={this.state.technical_mastery_status.archi_global.bricks_used}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.archi_global.bricks_used'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Design FMEA (robustness oriented) done?
                <select value={this.state.technical_mastery_status.archi_global.fmea_done}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.archi_global.fmea_done'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Reviews done?
                <select value={this.state.technical_mastery_status.archi_global.review_done}
                  onChange={this.handleThirdLevelInputChange}
      						name='technical_mastery_status.archi_global.review_done'>
                  <option value = {1}>Existing review report</option>
                  <option value = {2}>No review report</option>
                </select>
              </label>
              <br/>
          </div>
        </div>


        <div>
          <h2>Safety Status</h2>
          <div>
            <h3>Safety</h3>
              <label>
                Safety functions well identified?
                <select value={this.state.safety_status.well_identified}
                  onChange={this.handleSecondaryInputChange}
      						name='safety_status.well_identified'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Design FMEA (safety oriented)
                <select value={this.state.safety_status.design_fmea}
                  onChange={this.handleSecondaryInputChange}
      						name='safety_status.design_fmea'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Requirement from HW
                <select value={this.state.safety_status.requirement_from_hw}
                  onChange={this.handleSecondaryInputChange}
      						name='safety_status.requirement_from_hw'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Traceability
                <select value={this.state.safety_status.traceability}
                  onChange={this.handleSecondaryInputChange}
      						name='safety_status.traceability'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>
          </div>
        </div>

        <div>
          <h2>Cyber Security status</h2>
          <div>
            <h3>Cyber Security</h3>
              <label>
                Cyber security functions well identified
                <select value={this.state.cyber_status.well_identified}
                  onChange={this.handleSecondaryInputChange}
      						name='cyber_status.well_identified'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Secure code rules verification report
                <select value={this.state.cyber_status.verification_report}
                  onChange={this.handleSecondaryInputChange}
      						name='cyber_status.verification_report'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>
          </div>
        </div>

        <div>
          <h2>Development Management Mastery Status</h2>
          <div>
            <h3>Quality</h3>
              <label>
                Embedded Software Quality plan
                <select value={this.state.development_mastery_status.quality.quality_plan}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.quality.quality_plan'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Embedded Software Quality activities regularly monitored
                <select value={this.state.development_mastery_status.quality.regularly_monitored}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.quality.regularly_monitored'>
                  <option value = {1}>Completely</option>
                  <option value = {2}>Partially</option>
                  <option value = {3}>No</option>
                </select>
              </label>
              <br/>
          </div>

          <div>
            <h3>Requirement Organization</h3>
              <label>
                Requirement management tool
                <select value={this.state.development_mastery_status.requirement_org.management_tool}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.requirement_org.management_tool'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Traceability --> source code
                <select value={this.state.development_mastery_status.requirement_org.traceability}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.requirement_org.traceability'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>
          </div>

          <div>
            <h3>Development Organization</h3>
              <label>
                Development plan
                <select value={this.state.development_mastery_status.development_org.plan}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.development_org.plan'>
                  <option value = {1}>Complete</option>
                  <option value = {2}>Minor information missing</option>
                  <option value = {3}>Major information missing</option>
                  <option value = {4}>No document</option>
                </select>
              </label>
              <br/>

              <label>
                Embbedded Software planning is existing
                <select value={this.state.development_mastery_status.development_org.plan_exist}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.development_org.plan_exist'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Embbedded Software planning is monitored
                <select value={this.state.development_mastery_status.development_org.plan_monitored}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.development_org.plan_monitored'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Review development plan report
                <select value={this.state.development_mastery_status.development_org.review_report}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.development_org.review_report'>
                  <option value = {1}>Exisitng review report</option>
                  <option value = {2}>No reveiw</option>
                </select>
              </label>
              <br/>
          </div>

          <div>
            <h3>Configuration management</h3>
              <label>
                Configuration & Changement management plan
                <select value={this.state.development_mastery_status.config_management.management_plan}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.management_plan'>
                  <option value = {1}>Complete</option>
                  <option value = {2}>Minor information missing</option>
                  <option value = {3}>Major information missing</option>
                  <option value = {4}>No document</option>
                </select>
              </label>
              <br/>

              <label>
                Configuration management tool
                <select value={this.state.development_mastery_status.config_management.config_tool}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.config_tool'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Change management tool
                <select value={this.state.development_mastery_status.config_management.change_tool}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.change_tool'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Version file report
                <select value={this.state.development_mastery_status.config_management.version_report}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.version_report'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Release code Generation plan
                <select value={this.state.development_mastery_status.config_management.release_plan}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.release_plan'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Configuration management audit
                <select value={this.state.development_mastery_status.config_management.config_audit}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.config_audit'>
                  <option value = {1}>Yes</option>
                  <option value = {2}>No</option>
                </select>
              </label>
              <br/>

              <label>
                Review Configuration management plan report
                <select value={this.state.development_mastery_status.config_management.review_report}
                  onChange={this.handleThirdLevelInputChange}
      						name='development_mastery_status.config_management.review_report'>
                  <option value = {1}>Exisitng review report</option>
                  <option value = {2}>No reveiw report</option>
                </select>
              </label>
              <br/>
          </div>
        </div>

        <div>
          <h3>Design Test Strategy</h3>
            <label>
              Strategy verification plan
              <select value={this.state.development_mastery_status.design_test_strategy.verif_plan}
                onChange={this.handleThirdLevelInputChange}
                name='development_mastery_status.design_test_strategy.verif_plan'>
                <option value = {1}>Yes</option>
                <option value = {2}>No</option>
              </select>
            </label>
            <br/>

            <label>
              Strategy verification plan report
              <select value={this.state.development_mastery_status.design_test_strategy.verif_report}
                onChange={this.handleThirdLevelInputChange}
                name='development_mastery_status.design_test_strategy.verif_report'>
                <option value = {1}>Exisitng review report</option>
                <option value = {2}>No reveiw report</option>
                </select>
            </label>
            <br/>
        </div>

				<button type='submit'>Submit</button>
			</form>
      </Container>
     );
  }
}

AddProjectForm.propTypes = {	// validate properties type
  onNewProject: PropTypes.func.isRequired,
};
