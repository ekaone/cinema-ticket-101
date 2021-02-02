import Head from "next/head";
import { Container, Header, Movies, Seats } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cinema Ticket</title>
      </Head>

      <Container>
        {/* <Header /> */}
        {/* <Movies /> */}
        <Seats />
      </Container>
    </div>
  );
}
