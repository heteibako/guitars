import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Wrapper } from '@components/Wrapper';

const Artist = ({ artist }) => {
  const controls = useAnimation();
  controls.start({
    y: '100%',
    backgroundColor: '#000',
    transition: { duration: 0.5, ease: 'easeOut' },
    transitionEnd: {
      height: 0,
    },
  });

  return (
    <>
      <Wrapper stacked center justify style={{ height: '100vh' }}>
        <h1>{artist.fields.name}</h1>
      </Wrapper>
      <Wrapper stacked center justify>
        {artist.fields.guitars.map((guitar) => (
          <h2>{guitar.fields.guitarName}</h2>
        ))}
      </Wrapper>
    </>
  );
};

let client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: 'artist',
  });

  const paths = data.items.map((artist) => ({
    params: { slug: String(artist.fields.slug) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'artist',
    'fields.slug': params.slug || null,
  });

  return {
    props: { artist: data.items[0] },
  };
}

export default Artist;
