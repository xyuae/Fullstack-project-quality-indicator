//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
//import Note from 'react-icons/lib/fa/sticky-note-o';
import Delete from 'react-icons/lib/fa/close';
import Update from 'react-icons/lib/fa/wrench';
import Book from 'react-icons/lib/fa/book';
//import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

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
      toggleResume: false
    };
  } //constructor

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
  } // toggleResume
  /*
  displayResume = () => {
    display: this.state.toogleResume ? 'block': 'none';
  } // displayResume
  */
  render() {
    var selectedProject = {
      name: this.props.name,
      history: this.props.history
    };  //selectedProject

    return (
      <tbody>
        <tr>
  				<td>
  					{this.dateToString(this.props.createdAt)}
  				</td>
          <td>
            {this.dateToString(this.props.updateAt)}
          </td>
          <td>
            {this.props.name}
          </td>

          <td>
            <Book cursor='pointer' onClick= {()=> this.props.onClick(selectedProject)}></Book>
          </td>
  			</tr>
      </tbody>
    );  // return
  } //render
} // ProjectRow

ProjectRow.propTypes = {	// validate props type
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  safety_require: PropTypes.bool,
  cyber_require: PropTypes.bool,
  technical_mastery_status: PropTypes.object,
  onClick: PropTypes.func,
};
