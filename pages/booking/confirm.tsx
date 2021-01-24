import Center from '../../components/Center';

export default function BookingConfirmPage() {
  return (
    <Center>
      <p>NOME, a breve ti confermeremo l&apos;appuntamento.</p>
      <p>
        Questo è l&apos;indirizzo a cui ti invieremo gli aggiornamenti:
        <br />
        {' '}
        <span className="font-bold">INDIRIZZO</span>
      </p>
    </Center>
  );
}
