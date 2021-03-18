import React from 'react';
import resolveResponse from 'contentful-resolve-response';
import { Wrapper } from '@components/Wrapper';

interface Artist {
  fields: { slug: string };
}

interface Guitar extends Artist {
  fields: { slug: string; guitarName: string };
}

const Artist = ({ artist }) => {
  return (
    <>
      <Wrapper stacked center justify style={{ height: '100vh' }}>
        <h1>{artist.fields.name}</h1>
      </Wrapper>
      <Wrapper stacked center justify>
        {artist.fields.guitars.map((guitar: Guitar) => (
          <h2 key={guitar.fields.slug}>{guitar.fields.guitarName}</h2>
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

  const paths = data.items.map((artist: Artist) => ({
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
    props: { artist: resolveResponse(data)[0] },
  };
}

export default Artist;
