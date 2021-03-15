import {AppProps} from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import {Layout} from "../src/components/sections/Layout";
import {FirebaseProvider} from "../src/context/firebaseProvider";
import GlobalStyle from "../src/styles/GlobalStyle";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// eslint-disable-next-line prettier/prettier
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseProvider>
  );
}

export default MyApp;
