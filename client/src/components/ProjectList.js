import { ProjectRow } from './ProjectRow';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { ProjectChart } from './ProjectChart';
import React, { Component } from 'react';
/*
Create a table of Project,
presenting the date: date, name: string,
safety requirement: bool, and cyber requirement: bool
*/

export class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: []
    };
  }

  filteredProjects =() => {
    const {projects, filter} = this.props;
    return (!filter || !filter.match(/safety_require|cyber_require/)) ?
    projects : projects.filter(project => project[filter]
    );		// return an array of filtered Projects data
  };

  onProjectClick = (selectedProject) => {
    this.setState({
      selectedProject: selectedProject,
    });
  };
  render() {
    return (
     <div className='project-list'>
				<table>
	            	<thead>
						<tr>
							<td colSpan={4}>
								<Link to='/list-projects'>
									All Projects
								</Link>
								<Link to='/list-projects/safety_require'>
									Safety Requirement
								</Link>
								<Link to='/list-projects/cyber_require'>
									Cyber Requirement
								</Link>
							</td>
						</tr>
	            		<tr>
	            			<th>Date</th>
	            			<th>Project Name</th>
							      <th>Techical Mastery Status</th>
                    <th>Safety Status</th>
                    <th>Cyber Security Status</th>
                    <th>Development management mastery status</th>
	            		</tr>

	            	</thead>
	            	<tbody>
	            		{this.filteredProjects().map((project, i) =>
                  <ProjectRow key={i} onClick={this.onProjectClick}
                        {...project}/>
                 )}
	            	</tbody>
				</table>
				<ProjectChart {...this.state.selectedProject}/>
			</div>
    );
  }
}

ProjectList.propTypes = {	// validate the props type
  projects: function(props) {
    if (!Array.isArray(props.projects)) {
      return new Error(
       'ProjectList should be an array'
      );
    } else if (!props.projects.length) {
      return new Error(
       'ProjectList must have at least one record'
      );
    }
  },
  filter: PropTypes.string,
};
