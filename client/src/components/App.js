import React, { Component } from 'react';
import { ProjectList } from '../containers/ProjectList';
import { ProjectCount } from '../containers/ProjectCount';
import { AddProjectForm } from '../containers/AddProjectForm';
import * as api from '../utils/api';
import * as _ from 'lodash';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: []
    };
    this.addProject = this.addProject.bind(this);   // two-way function binding
  } // constructor(props)
  componentDidMount() {
    api.fetchAllProject().then(allProjects => {
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
    api.postProject(newProject).then(res => {
      this.setState({
        allProjects: [
         ...this.state.allProjects,
         res
        ]
      }); // this.setState
    }); // api.postProject(newProject)
  } //addProject

  deleteProject = (projectId) => {
    let allProjs = this.state.allProjects;
    api.deleteProject(projectId).then(res => {
      _.remove(allProjs, project => {
        return project['_id'] == res['_id'];
      }); //remove
      this.setState({
        allProjects: allProjs
      }); //setState
      //console.log(newProjs);
    });  //then
  } // deleteProject

  updateProject = (projectId, updatedProject) => {
    //console.log(this.state);
    let allProjs = this.state.allProjects;
    api.updateProject(projectId, updatedProject).then(res => {
      let index = _.findIndex(allProjs, project => {
        return project['_id'] == res['_id'];
      }); //updateProject
      allProjs[index] = res;
      this.setState({
        allProjects: allProjs
      }); //setState
      //console.log(newProjs);
    });  //then
  } // updateProject

  render() {
    return (
      <div className='app'>
        {
          (this.props.location.pathname === '/') ?
          <ProjectCount total={this.countProjects()}
                        cyber_require={this.countProjects('cyber_require')}
                        safety_require={this.countProjects('safety_require')}/> :
          (this.props.location.pathname === '/add-project') ?
          <AddProjectForm onNewProject = {this.addProject}/> :
          (this.state.allProjects.length > 0) ?
          <ProjectList projects={this.state.allProjects}
                      filter={this.props.params.filter}
                      onDelete = { this.deleteProject }
                      onUpdate = { this.updateProject }
          /> :
          <p>No Porject/ Lost Connection</p>
        }
		  </div>
    );  // return
  } // render
} // class App
