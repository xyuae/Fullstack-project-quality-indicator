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
