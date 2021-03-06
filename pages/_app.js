import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import '../styles.css';
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
