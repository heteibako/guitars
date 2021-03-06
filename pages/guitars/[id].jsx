import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Wrapper } from '../../components/Wrapper';
import { HalfColumn } from '../../components/HalfColumn';

const Guitar = ({ guitar: { body, name, strings, neck, neckProfile, pickups } }) => {
  return (
    <Wrapper>
      <HalfColumn>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>{name}</h1>
        </motion.div>
      </HalfColumn>
      <HalfColumn>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>{body}</p>
          <p>{strings}</p>
          <p>{neck}</p>
          <p>{neckProfile}</p>
          <p>{pickups}</p>
        </motion.div>
      </HalfColumn>
    </Wrapper>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const res = await axios.get(`${process.env.API_URL}/api/guitars/${id}`);
  return { props: { guitar: res.data } };
}

export default Guitar;
