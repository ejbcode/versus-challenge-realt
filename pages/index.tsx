import Head from "next/head";
import React from "react";

import VsBoard from "../components/VsBoard";
import {useAuth} from "../src/authProvider";

export default function Home() {
  const {user, loading, logout} = useAuth();

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
