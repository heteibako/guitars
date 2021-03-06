import axios from 'axios';

export const useAddGuitar = (data) => {
  axios.post(`/api/guitars/`, data);
  console.log(data);
};
