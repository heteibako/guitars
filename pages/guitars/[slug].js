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
import ReactContentfulImage from 'react-contentful-image';

const Guitar = ({ guitar }) => {
  const controls = useAnimation();
  controls.start({
    y: '100%',
    backgroundColor: '#000',
    transform: 45,
    transition: { duration: 0.5, ease: 'easeOut' },
    transitionEnd: {
      height: 0,
    },
  });

  return (
    <Wrapper stacked center justify>
      <motion.div
        exit={{ scaleY: 0, originY: 1 }}
        initial={{ scaleY: 1, originY: 1 }}
        animate={{ scaleY: 0, originY: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'black',
          width: '100vw',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
      <Head>
        <title>{guitar?.fields?.guitarName} | NextJS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BackdropHeading>{guitar?.fields?.guitarName}</BackdropHeading>
      <HalfColumn center>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, ease: 'easeInOut' }}
          animate={{ opacity: 1, translateY: 20 }}>
          <motion.div whileHover={{ scale: 1.05, ease: 'easeInOut' }} transition={{ type: 'spring', duration: 1 }}>
            <ReactContentfulImage src={guitar?.fields?.image?.fields?.file?.url} style={{ height: 700 }} />
          </motion.div>
        </motion.div>
      </HalfColumn>
      <HalfColumn>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>
            body: <strong>{guitar?.fields?.body}</strong>{' '}
          </p>
          <p>
            strings: <strong>{guitar?.fields?.strings}</strong>
          </p>
          <p>
            neck: <strong>{guitar?.fields?.neck}</strong>
          </p>
          <p>
            neck profile: <strong>{guitar?.fields?.neckProfile}</strong>
          </p>
          <p>
            pickups: <strong>{guitar?.fields?.pickups}</strong>
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

let client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: 'guitar',
  });

  const paths = data.items.map((guitar) => ({
    params: { slug: String(guitar.fields.slug) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'guitar',
    'fields.slug': params.slug || null,
  });

  return {
    props: { guitar: data.items[0] },
  };
}

export default Guitar;
