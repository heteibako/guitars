import React, { useState } from 'react';
import Link from 'next/link';
import { useAddGuitar } from '../../../hooks/useAddGuitar';
const Add = () => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
    };
    useAddGuitar(data);
  };
  return (
    <div>
      <h1>Add new guitar</h1>
      <Link href='/guitars'>
        <a>Back</a>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' id='name' onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Add new Guitar</button>
      </form>
    </div>
  );
};

export default Add;
