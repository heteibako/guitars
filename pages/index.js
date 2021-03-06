import Head from 'next/head';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Wrapper } from '../components/Wrapper';
import { Heading1 } from '../components/Heading1';
import { Heading2 } from '../components/Heading2';
import { Button } from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Favourite Guitars | NextJS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <motion.div className='container' exit={{ opacity: 0 }}>
        <Wrapper center stacked style={{ flexDirection: 'column' }}>
          <Heading1 centered>My Favourite Guitars</Heading1>
          <Heading2 centered>The Ultimate Collection</Heading2>
          <Button>
            <Link href='/guitars'>
              <a>Guitars</a>
            </Link>
          </Button>
        </Wrapper>
        <Footer>Footer</Footer>
      </motion.div>
    </>
  );
}
