import { AppProps } from 'next/dist/next-server/lib/router/router';
// import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AuthWrapper } from '../context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthWrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default MyApp;
