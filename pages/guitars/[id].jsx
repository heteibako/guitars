import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { Wrapper } from '../../components/Wrapper';
import { HalfColumn } from '../../components/HalfColumn';
import Image from 'next/image';
import { Button } from '../../components/Button';
import { BackdropHeading } from '../../components/BackdropHeading';

const Guitar = ({ guitar: { body, name, strings, neck, neckProfile, pickups, image } }) => {
  const controls = useAnimation();
  controls.start({
    y: '100%',
    backgroundColor: '#000',
    transition: { duration: 0.5, ease: 'easeOut' },
  });
  return (
    <Wrapper stacked>
      <motion.div
        exit={{ opacity: 1, height: 200, scaleY: 100 }}
        initial={{ opacity: 1, height: '100vh', scaleY: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'black',
          height: '5vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
        animate={controls}
      />
      <Head>
        <title>{name} | NextJS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BackdropHeading>{name}</BackdropHeading>
      <HalfColumn center>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, ease: 'easeInOut' }}
          animate={{ opacity: 1, translateY: 20 }}>
          <Image src={`/static/images/${image}.png`} alt={name} width='200' height='600' />
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

          <Link href='/guitars'>
            <Button>
              <a>Back</a>
            </Button>
          </Link>
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
