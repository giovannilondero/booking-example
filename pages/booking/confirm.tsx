import Button from '../../components/Button';
import Center from '../../components/Center';

export default function BookingConfirmPage() {
  return (
    <Center>
      <p className="mb-2">NOME, a breve ti confermeremo l&apos;appuntamento.</p>

      <p className="mb-2">
        Questo è l&apos;indirizzo a cui ti invieremo gli aggiornamenti:
        <br />
        {' '}
        <span className="font-bold">INDIRIZZO</span>
      </p>

      <p className="mb-2">
        Di seguito le tue preferenze:
        <ul>
          <li className="font-bold">Mer 20/01/2021 alle 14</li>
          <li className="font-bold">Ven 22/01/2021 alle 10, alle 11 e alle 15</li>
        </ul>
      </p>

      <div className="mt-4">
        <Button className="mr-4">Modifica</Button>
        <Button>Conferma</Button>
      </div>
    </Center>
  );
}
