import axios from 'axios';
//import config from './config/config';

export const fetchProject = projectName => {
  return axios.get(`/api/projects/name/${projectName}`)
							.then(res => res.data);
};

export const fetchAllProject = () => {
  return axios.get('api/projects')
              .then(res => res.data);
};


export const postProject = (newProject) => {
  return axios.post('api/projects', newProject)
              .then(res => res.data);
};

export const deleteProject = (projectId) => {
  return axios.delete(`api/projects/${projectId}`)
              .then(res => res.data);
};

export const updateProject = (projectId, updatedProject) => {
  return axios.put(`api/projects/${projectId}`, updatedProject)
              .then(res => res.data);
};
