import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

const Guitars = ({ guitars }) => {
  return (
    <div>
      <Head>
        <title>Guitar store | New guitars</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>This is the guitars page</h1>
      <Link href='/guitars/add'>
        <a>Add</a>
      </Link>
      <ul>
        {guitars.data.map((guitar) => (
          <li key={guitar._id}>
            <Link href='/guitars/[id]' as={`/guitars/${guitar._id}`}>
              <a> {guitar.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const res = await axios.get('http://localhost:3000/api/guitars/');
  return { props: { guitars: res.data } };
}

export default Guitars;
