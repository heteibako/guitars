import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Heading2 } from '../../components/Heading2';
import { Image } from '../../components/Image';
import { Wrapper } from '../../components/Wrapper';

interface GuitarProps {
  guitars: [];
}
interface Guitar {
  fields: {
    guitarName: string;
    slug: string;
    image: { fields: { file: { url: string }; title: string } };
  };
}

const Guitars: FC<GuitarProps> = ({ guitars }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Guitar store | New guitars</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Wrapper stacked>
        {guitars.map((guitar: Guitar) => (
          <Card key={guitar.fields.slug}>
            <Image src={guitar.fields.image.fields.file.url} alt={guitar.fields.image.fields.title} />
            <Heading2 smaller>
              <Link href='/guitars/[id]' as={`/guitars/${guitar.fields.slug}`}>
                <a> {guitar.fields.guitarName}</a>
              </Link>
            </Heading2>
          </Card>
        ))}
      </Wrapper>
      {console.log(guitars)}
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
