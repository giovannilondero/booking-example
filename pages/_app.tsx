import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;