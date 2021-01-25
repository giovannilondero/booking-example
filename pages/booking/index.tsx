import Head from 'next/head';
import { useRouter } from 'next/router';
import Center from '../../components/Center';
import Button from '../../components/Button';

interface AvailableDay {
  label: string;
  availableHours: string[];
}

type AvailableDays = AvailableDay[];

export default function BookingPage() {
  const router = useRouter();

  const availableDays: AvailableDays = [
    {
      label: 'Mar 19/01/2021',
      availableHours: ['09', '10', '11', '12', '14', '15', '16', '17'],
    },
    {
      label: 'Mer 20/01/2021',
      availableHours: ['09', '10', '11', '12', '14', '15', '16', '17'],
    },
    {
      label: 'Gio 21/01/2021',
      availableHours: ['09', '10', '11', '12', '14', '15', '16', '17'],
    },
    {
      label: 'Ven 22/01/2021',
      availableHours: ['09', '10', '11', '12', '14', '15', '16', '17'],
    },
    {
      label: 'Lun 25/01/2021',
      availableHours: ['09', '10', '11', '12', '14', '15', '16', '17'],
    },
  ];

  const proceed = () => {
    router.push('/booking/confirm');
  };

  return (
    <>
      <Head>
        <title>Book appointment - Booking Example</title>
      </Head>

      <main>
        <Center>
          <DaySelector days={availableDays} />

          <Button onClick={() => proceed()}>Avanti</Button>
        </Center>
      </main>
    </>
  );
}

function DaySelector({ days }: { days: AvailableDays }) {
  return (
    <>
      {days.map((day) => (
        <div key={day.label} className="flex mb-4">
          <Day text={day.label} />
          {day.availableHours.map((hour) => (
            <Hour key={hour} text={hour} />
          ))}
        </div>
      ))}
    </>
  );
}

function Day({ text }: { text: string }) {
  return (
    <div className="rounded py-1 px-2 border border-gray-200 border-solid w-36 text-gray-400 mr-4">
      {text}
    </div>
  );
}

function Hour({ text }: { text: string }) {
  // TODO: checkbox
  return (
    <div className="rounded py-1 px-2 border border-gray-200 border-solid ml-2">
      {text}
    </div>
  );
}
