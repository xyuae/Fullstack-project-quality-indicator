//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Check from 'react-icons/lib/fa/check';
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
  decimalToPercent(number){
    return Math.floor(number * 100) + '%';
  }
  dateToString(date){
    //console.log(date);
    date = new Date(date);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1): (date.getMonth() + 1);
    let day = date.getDate();
    //return date.toUTCString();
    return year + '/' + month + '/' + day;
  }
  render() {
    var selectedProject = {
      name: this.props.name,
      history: this.props.history
    };
    //console.log('projectName', this.props.projectName);
    return (
      <tr>
				<td>
					{this.dateToString(this.props.createdAt)}
				</td>
				<td>
					<div className='link ViewHistory'
      				 onClick= {()=> this.props.onClick(selectedProject)}>
						{this.props.name}
					</div>
				</td>
				<td>
					{this.decimalToPercent(this.props.technical_mastery_status.score)}
				</td>
        <td>
					{this.decimalToPercent(this.props.safety_status.score)}
				</td>
        <td>
					{this.decimalToPercent(this.props.cyber_status.score)}
				</td>
        <td>
					{this.decimalToPercent(this.props.development_mastery_status.score)}
				</td>
			</tr>
    );
  }
}

ProjectRow.propTypes = {	// validate props type
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  safety_require: PropTypes.bool,
  cyber_require: PropTypes.bool,
  technical_mastery_status: PropTypes.object,
  onClick: PropTypes.func,
};
