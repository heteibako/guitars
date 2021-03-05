import React from 'react';
import axios from 'axios';

export const useAddGuitar = async (data) => {
  await axios.post('http://localhost:3000/api/guitars/', data);
};
