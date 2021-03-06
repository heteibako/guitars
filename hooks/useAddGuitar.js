import React from 'react';
import axios from 'axios';

export const useAddGuitar = async (data) => {
  try {
    await axios.post(`${process.env.API_URL}/api/guitars/`, data);
  } catch (error) {
    console.log(error);
  }
};
