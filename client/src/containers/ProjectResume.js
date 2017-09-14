import React, { Component } from 'react';
import { ProjectPolarSpider } from '../styled/ProjectResume';

export class ProjectResume extends Component {
	decimalToPercent(number){
    return Math.floor(number * 100) + '%';
  }
	render() {
		let {technical_mastery_status, safety_status, cyber_status, development_mastery_status} = this.props;
		let categories = ['Specification',
			 'Architecture & Global Design', 
			 'Detailed design', 
			 'Code', 
			 'Integration test', 
			 'Pre-varification test', 
			 'Safety', 
			 'Cyber Security', 
			 'Quality', 
			 'Requirement organization', 
			 'Developement organization', 
			 'Configuration management',
			 'Design test strategy'
			];	// let categories
		let data = [
			technical_mastery_status.specification.score,
			technical_mastery_status.archi_global.score,
			technical_mastery_status.detailed_design.score,
			technical_mastery_status.code.score,
			technical_mastery_status.integration_test.score,
			technical_mastery_status.pre_verification_test.score,
			safety_status.score,
			cyber_status.score,
			development_mastery_status.quality.score,
			development_mastery_status.requirement_org.score,
			development_mastery_status.development_org.score,
			development_mastery_status.config_management.score,
			development_mastery_status.design_test_strategy.score,
		];	// data
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Techical Mastery Status</th>
							<th>Safety Status</th>
							<th>Cyber Security Status</th>
							<th>Development management mastery status</th>
						</tr>
					</thead>

					<tbody>
						<tr>
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
					</tbody>
				</table>
				<ProjectPolarSpider 
					data={data}
					categories={categories}
				/>
			</div>
		);
	}
}
