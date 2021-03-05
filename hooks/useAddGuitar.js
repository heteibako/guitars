import React from 'react';
import axios from 'axios';

export const useAddGuitar = async (data) => {
  await axios.post('/api/guitars', data);
};
