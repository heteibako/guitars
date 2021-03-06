import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Guitar = ({ guitar }) => {
  return (
    <div>
      <h1>Guitar {guitar.name}</h1>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const res = await axios.get(`${process.env.API_URL}/api/guitars/${id}`);
  return { props: { guitar: res.data } };
}

export default Guitar;
