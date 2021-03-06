import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAddGuitar } from '../../../hooks/useAddGuitar';

const Add = () => {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { body, name, strings, neck, neckProfile, pickups } = state;
    const data = {
      body,
      name,
      strings,
      neck,
      neckProfile,
      pickups,
    };
    useAddGuitar(data);
  };
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Add new guitar</h1>
      <Link href='/guitars'>
        <a>Back</a>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' onChange={handleChange} placeholder='name' />
        <input type='text' name='body' onChange={handleChange} placeholder='body' />
        <input type='number' name='strings' onChange={handleChange} placeholder='strings' />
        <input type='text' name='neck' id='neck' onChange={handleChange} placeholder='neck' />
        <input type='text' name='neckProfile' onChange={handleChange} placeholder='neck profile' />
        <input type='text' name='pickups' onChange={handleChange} placeholder='pickups' />
        <button type='submit'>Add new Guitar</button>
      </form>
    </motion.div>
  );
};

export default Add;
