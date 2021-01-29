import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cinema Ticket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-red-600">Cinema</div>
      <div className="text-green-500">Ticket..</div>
      <div className="text-green-500">Under Construction</div>
    </div>
  );
}
