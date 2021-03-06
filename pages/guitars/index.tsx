import React, { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import {motion} from 'framer-motion'
interface GuitarProps {
  guitars: {
    data: [];
  };
}
interface Guitar {
    name: string,
    _id: string
}

const Guitars: FC<GuitarProps> = ({ guitars }) => {
  return (
    <motion.div exit={{opacity: 0}}  initial={{opacity: 0}} animate={{opacity: 1}}>
      <Head>
        <title>Guitar store | New guitars</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>This is the guitars page</h1>
      <Link href='/guitars/add'>
        <a>Add</a>
      </Link>
      <motion.ul exit={{opacity: 0}}>
        {guitars.data.map((guitar: Guitar) => (
          <li key={guitar._id}>
            <Link href='/guitars/[id]' as={`/guitars/${guitar._id}`}>
              <a> {guitar.name}</a>
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export async function getServerSideProps(ctx) {
  const res = await axios.get(`${process.env.API_URL}/api/guitars/`);
  return { props: { guitars: res.data } };
}

export default Guitars;
