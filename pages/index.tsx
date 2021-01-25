import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import Center from '../components/Center';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <main>Loading...</main>
      </Center>
    </>
  );
}
