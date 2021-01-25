import Head from 'next/head';
import Center from '../../components/Center';
import Button from '../../components/Button';

export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Book appointment - Booking Example</title>
      </Head>

      <main>
        <Center>

          <div className="flex mb-4">
            <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
              Mar 19/01/2021
            </div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">09</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">10</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">11</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">12</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">14</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">15</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">16</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">17</div>
          </div>

          <div className="flex mb-4">
            <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
              Mer 20/01/2021
            </div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">09</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">10</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">11</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">12</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">14</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">15</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">16</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">17</div>
          </div>

          <div className="flex mb-4">
            <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
              Gio 21/01/2021
            </div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">09</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">10</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">11</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">12</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">14</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">15</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">16</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">17</div>
          </div>

          <div className="flex mb-4">
            <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
              Ven 22/01/2021
            </div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">09</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">10</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">11</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">12</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">14</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">15</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">16</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">17</div>
          </div>

          <div className="flex mb-4">
            <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
              Lun 25/01/2021
            </div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">09</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">10</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">11</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">12</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">14</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">15</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">16</div>
            <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">17</div>
          </div>

          <Button>
            Avanti
          </Button>
        </Center>
      </main>
    </>
  );
}
