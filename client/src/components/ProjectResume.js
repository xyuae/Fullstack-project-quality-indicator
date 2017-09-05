import React, { Component } from 'react';


export class ProjectResume extends Component {
	decimalToPercent(number){
    return Math.floor(number * 100) + '%';
  }
	render() {
		return(
			<div>
				<th>Techical Mastery Status</th>
				<th>Safety Status</th>
				<th>Cyber Security Status</th>
				<th>Development management mastery status</th>
			</div>

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
		);
	}
}
