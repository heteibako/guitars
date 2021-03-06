import axios from 'axios';

export const useAddGuitar = async (data) => {
  try {
    await axios.post(`/api/guitars/`, data);
  } catch (error) {
    console.log(error);
  }
};
