import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Wrapper } from '../components/Wrapper';
import { Heading1 } from '../components/Heading1';
import { Heading2 } from '../components/Heading2';
import { Button } from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div className={styles.container} exit={{ opacity: 0 }}>
      <Head>
        <title>My Favourite Guitars | NextJS App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper stacked style={{ flexDirection: 'column' }}>
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
  );
}
