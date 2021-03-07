import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Wrapper } from '../../components/Wrapper';
import { HalfColumn } from '../../components/HalfColumn';
import Image from 'next/image';

const Guitar = ({ guitar: { body, name, strings, neck, neckProfile, pickups, image } }) => {
  return (
    <Wrapper>
      <HalfColumn center>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image src={`/images/${image}.png`} alt='me' width='200' height='600' />
          <h1>{name}</h1>
        </motion.div>
      </HalfColumn>
      <HalfColumn>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>
            body: <strong>{body}</strong>{' '}
          </p>
          <p>
            strings: <strong>{strings}</strong>
          </p>
          <p>
            neck: <strong>{neck}</strong>
          </p>
          <p>
            neck profile: <strong>{neckProfile}</strong>
          </p>
          <p>
            pickups: <strong>{pickups}</strong>
          </p>
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
