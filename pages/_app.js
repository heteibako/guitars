import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { NavBar } from '@components/nav/NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
