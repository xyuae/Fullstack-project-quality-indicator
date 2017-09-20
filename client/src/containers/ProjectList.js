import { ProjectRow } from './ProjectRow';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { ProjectChart } from './ProjectChart';
import React, { Component } from 'react';
import '../stylesheets/style.css';
/*
Create a table of Project,
presenting the date: date, name: string,
safety requirement: bool, and cyber requirement: bool
*/

export class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: ''
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
    let filteredProjs = this.props.allProjects;

    filteredProjs = this.filteredProjects().map((project, index) =>{
      return <ProjectRow
                key={index}
                onShowHistory={this.onProjectClick}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
                whichProject = { project }
                {...project}/>; //return
    }); //map
    return (
     <div className='project-list'>
				<table>
          <thead>
						<tr>
							<td colSpan={4}>
								<Link to='/project-list'>
									All Projects
								</Link>
								<Link to='/project-list/safety_require'>
									Safety Requirement
								</Link>
								<Link to='/project-list/cyber_require'>
									Cyber Requirement
								</Link>
							</td>
						</tr>
          </thead>
        </table>
      	<ul className='item-list media-list'>{filteredProjs}</ul>
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
