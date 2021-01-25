import Head from 'next/head';
import Button from '../components/Button';
import Center from '../components/Center';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Booking Example</title>
      </Head>

      <main>
        <Center>
          <article className="flex flex-col">
            {/* TODO: tradurre placeholders */}
            <input className="rounded py-1 px-2 border border-gray-200 border-solid mb-3.5" type="text" name="name" placeholder="Nome" />
            <input className="rounded py-1 px-2 border border-gray-200 border-solid mb-5" type="email" name="email" placeholder="Email" />
            {/* TODO: tradurre button */}
            <Button>Avanti</Button>
          </article>
        </Center>
      </main>
    </>
  );
}
