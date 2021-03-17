import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { motion } from 'framer-motion';
interface GuitarProps {
  guitars: [];
}
interface Guitar {
  fields: {
    name: string;
    slug: string;
  };
}

const Guitars: FC<GuitarProps> = ({ guitars }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Guitar store | New guitars</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>This is the guitars page</h1>
      <Link href='/guitars/add'>
        <a>Add</a>
      </Link>
      <motion.ul exit={{ opacity: 0 }}>
        {guitars.map((guitar: Guitar) => (
          <li key={guitar.fields.slug}>
            <Link href='/guitars/[id]' as={`/guitars/${guitar.fields.slug}`}>
              <a> {guitar.fields.name}</a>
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

let client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps(ctx) {
  let data = await client.getEntries({
    content_type: 'guitar',
  });

  return {
    props: { guitars: data.items },
  };
}

export default Guitars;
