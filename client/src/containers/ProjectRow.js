//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Note from 'react-icons/lib/fa/sticky-note-o';
import '../stylesheets/style.css';
import Delete from 'react-icons/lib/fa/close';
import Update from 'react-icons/lib/fa/wrench';
import Book from 'react-icons/lib/fa/book';
//import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { ProjectResume } from '../containers/ProjectResume';
import { ProjectChart } from './ProjectChart';
import { UpdateProjectForm} from './UpdateProjectForm';
import RaisedButton from 'material-ui/RaisedButton';
//import { ProjectButton } from '../styled/ProjectRow';
/*
A row of informaiton in the table ProjectList,
The ProjectRow component compose the body of the table,
the information present includes projectName, date, safety requirement,
and cyber requirement
*/
export class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleResume: false,
      toggleHistory: false,
      toggleUpdateForm: false,
    };
  } //constructor

  handleDelete = () => {
    this.props.onDelete(this.props._id);
  }
  dateToString(date){
    //console.log(date);
    date = new Date(date);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1);
    let day = date.getDate();
    //return date.toUTCString();
    return year + '/' + month + '/' + day;
  } // dateToString
  toggleResumeState = () => {
    //console.log(this.state);
    let update = !this.state.toggleResume;
    this.setState({
      toggleResume: update
    });
  } // toggleResumeState

  toggleUpdateFormState = () => {
    //console.log(this.state.toggleUpdateForm);
    let update = !this.state.toggleUpdateForm;
    this.setState({
      toggleUpdateForm: update
    });
  } // toggleUpdateFormState

  toggleHistoryState = () => {
    //console.log(this.state.toggleHistory);
    let update = !this.state.toggleHistory;
    this.setState({
      toggleHistory: update
    });
  } // toggleHistoryState

  closeUpdateWindow = () => {
    this.setState({
      toggleUpdateForm: false
    });
  } // closeUpdateWindow
  render() {
    const styles = {
      button: {
        margin: 12,
      }
    };
    let selectedProject = {
      name: this.props.name,
      history: this.props.history
    };  //selectedProject

    return (
      <li className='project-item'>
        <div className='media-left, ui-btn-text'>
          <RaisedButton label='Delete' secondary= {true} icon={<Delete/>} style= {styles.button}
            onClick={this.handleDelete}/>
          <RaisedButton label='Details' primary = {true} icon={<Note/>} style= {styles.button}
            onClick={this.toggleResumeState}/>
          <RaisedButton label='Update' icon={<Update/>} style= {styles.button}
            onClick={this.toggleUpdateFormState}/>
          <RaisedButton label='History' icon={<Book/>} style= {styles.button}
            onClick={this.toggleHistoryState}/>
        </div>
        <div className='project-info mdedia-body'>
          <div className='project-head'>
            <span className='project-name'>{this.props.name}</span>
          </div>
          <span className='apt-date'>Created: {this.dateToString(this.props.createdAt)}</span>
          <br/>
          <span className='apt-date'>Updated: {this.dateToString(this.props.updateAt)}</span>
          <br/>
          {this.state.toggleUpdateForm ?
            <UpdateProjectForm
              onUpdateProject={this.props.onUpdate}
              closeUpdateWindow={this.closeUpdateWindow}
              {...this.props.whichProject}/> :
            null
          }
          {this.state.toggleResume ?
            <ProjectResume {...this.props.whichProject}/> :
            null
          }
          {
            this.state.toggleHistory ?
            <ProjectChart {...selectedProject}/> :
            null
          }
        </div>
      </li>
    );  // return
  } //render
} // ProjectRow

ProjectRow.propTypes = {	// validate props type
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  safety_require: PropTypes.bool,
  cyber_require: PropTypes.bool,
  technical_mastery_status: PropTypes.object,
  //whichProject: PropTypes.object,
};
