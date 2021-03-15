import Head from "next/head";

import VsBoard from "../src/components/screens/VsBoard/Index";
import {useFirebase} from "../src/context/firebaseProvider";

export default function Home() {
  const {loading} = useFirebase();

  if (loading) return <p>loading</p>;

  return (
    <main>
      <Head>
        <title>Versus Challenge</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <VsBoard />
    </main>
  );
}
