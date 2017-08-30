import React from 'react';
import PropTypes from 'prop-types';
/*
UI design for project information input form
*/
// stateless Component with refs as callbacks function
export const AddProjectForm = ({projectName,
							 date,
							 safety_require,
							 cyber_require,
						   technical_mastery_status,
						 	 onNewProject}) => {
  // console.log(typeof onNewProject); // print typeof onNewProject
  let _projectName, _date, _safety_require, _cyber_require, _technical_mastery_status;	// define local reference
  const submit = (e) =>  {	// function for sumbit data
    e.preventDefault();
    onNewProject({
      date: _date.value,
      projectName: _projectName.value,
      safety_require: _safety_require.checked,
      cyber_require: _cyber_require.checked,
      technical_mastery_status: _technical_mastery_status.value
    });
    /*
    console.log('project', _projectName.value);
    console.log('date', _date.value);
    console.log('safety_require', _safety_require.checked);
    console.log('cyber_require', _cyber_require.checked);
    console.log('technical_mastery_status', _technical_mastery_status.value);
    */
    _projectName.value = '';
    _date.value = '';
    _safety_require.checked = false;
    _cyber_require.checked = false;
  };

  return (
   <form onSubmit={submit} className='add-project-form'>
			<label htmlFor='projectName'> Project Name</label>
			<input id='projectName'
        type='text'
        required
        defaultValue={projectName}
        autoFocus= 'true'
        ref={input => _projectName = input}/>

			<label htmlFor='date'>Date</label>
			<input id='date'
        type='date'
        required
        defaultValue={date}
        ref={input => _date = input}/>

			<div>
				<input id='safety_require'
         type='checkbox'
         defaultChecked={safety_require}
         ref={input => _safety_require = input}/>
				<label htmlFor='safety_require'>
					Do you have Saftey Certification Requirement in your project?
				</label>
			</div>

			<div>
				<input id='cyber_require'
         type='checkbox'
         defaultChecked={cyber_require}
         ref={input => _cyber_require = input}/>
				<label htmlFor='cyber_require'>
					Do you have Cyber Security Requirement in your project?
				</label>
			</div>

			<div>
				Technical Mastery Status
			</div>



			<div>
				<label htmlFor='technical_mastery_status'>
					Technical Mastery Status:
				</label>
				<input id='technical_mastery_status'
         type='number'
         min = '0'
         max = '1'
         required
         defaultValue = {technical_mastery_status}
         ref={input => _technical_mastery_status = input}/>

			</div>
			<button>Add Project</button>
		</form>
  );
};

function getCurrentDate() {
  // return the current date in string format of "yy-mm-dd"
  // For example, "2017-08-18"
  let now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
  let date = now.getDate();
  return year + '-' + month + '-' + date;
}
AddProjectForm.defaultProps = {	// define default properties of the form
  projectName: 'Project',
  date: getCurrentDate(),
  safety_require: false,
  cyber_require: false,
  technical_mastery_status: 0
};

AddProjectForm.propTypes = {	// validate properties type
  projectName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  safety_require: PropTypes.bool.isRequired,
  cyber_require: PropTypes.bool.isRequired,
  technical_mastery_status: PropTypes.number.isRequired,
  onNewProject: PropTypes.func.isRequired,
};
