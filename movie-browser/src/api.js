import axios from 'axios';

export const fetchData = apiURL => {
  return axios
    .get(apiURL)
    .then(res => res.data)
    .catch(err => console.log(err));
};
