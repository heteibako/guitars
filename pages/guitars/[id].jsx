import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { motion } from 'framer-motion';

const Guitar = ({ guitar }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Guitar {guitar.name}</h1>
    </motion.div>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const res = await axios.get(`${process.env.API_URL}/api/guitars/${id}`);
  return { props: { guitar: res.data } };
}

export default Guitar;
