import {AppProps} from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import {Layout} from "../components/Layout";
import {AuthProvider} from "../src/authProvider";
import GlobalStyle from "../styles/GlobalStyle";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// eslint-disable-next-line prettier/prettier
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
