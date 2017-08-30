import { Component } from 'react';
import { ProjectList } from './ProjectList';
import { SkiDayCount } from './SkiDayCount';
import { AddProjectForm } from './AddProjectForm';
import { Menu } from './Menu';
import * as api from '../api';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: []
    };
    //this.addDay = this.addDay.bind(this);
    this.addProject = this.addProject.bind(this);   // two-way function binding
  }
  componentDidMount() {
    api.fetchAllProject().then(allProjects => {
      //console.log(allProjects);
      this.setState({
        allProjects,
      });
    });
  }
  countProjects(filter) {    // return the percentage of projects by filter
    const {allProjects} = this.state;
    return allProjects.filter(
     (project) => (filter) ? project[filter] : project
    ).length;
  }

  addProject(newProject) {    // add a project to current state
    this.setState({
      allProjects: [
       ...this.state.allProjects,
       newProject
      ]
    });
  }

  render() {
    return (
     <div className='app'>
			   <Menu />
			   {(this.props.location.pathname === '/') ?
     <SkiDayCount total={this.countProjects()}
        powder={this.countProjects(
            'cyber_require'
           )}
        backcountry={this.countProjects(
            'safety_require'
           )}/> :
    (this.props.location.pathname === '/add-project') ?
       <AddProjectForm onNewProject = {this.addProject}/> :
       (this.state.allProjects.length > 0) ?
       <ProjectList projects={this.state.allProjects}
          filter={this.props.params.filter}/> :
          <p>No Porject/ Lost Connection</p>
      }
		   </div>
    );
  }
}
