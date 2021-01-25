import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Button from '../components/Button';
import Center from '../components/Center';
import { useAuthContext } from '../context/auth';
import User from '../domain/user';

export default function LoginPage() {
  const authContext = useAuthContext();
  const router = useRouter();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const saveUser = () => {
    const user = User.create({
      name: nameInputRef.current!.value,
      email: emailInputRef.current!.value,
    });

    // TODO: user checks
    // TODO: show errors

    authContext.saveUser(user);
    router.push('/booking');
  };

  return (
    <>
      <Head>
        <title>Login - Booking Example</title>
      </Head>

      <main>
        <Center>
          <article className="flex flex-col">
            {/* TODO: tradurre placeholders */}
            <input
              className="rounded py-1 px-2 border border-gray-200 border-solid mb-3.5"
              type="text"
              name="name"
              placeholder="Nome"
              ref={nameInputRef}
            />
            <input
              className="rounded py-1 px-2 border border-gray-200 border-solid mb-5"
              type="email"
              name="email"
              placeholder="Email"
              ref={emailInputRef}
            />
            {/* TODO: tradurre button */}
            <Button onClick={() => saveUser()}>Avanti</Button>
          </article>
        </Center>
      </main>
    </>
  );
}
