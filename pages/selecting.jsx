import Head from "next/head";

import SelectingUi from "../components/uiScreen/SelectingUi";

export default function Selecting() {
  return (
    <main>
      <Head>
        <title>Select a product |Versus Challenge </title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <SelectingUi />
    </main>
  );
}
