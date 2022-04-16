import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/styles";

const GlobalStyles = createGlobalStyle`
* { 
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
 
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body{
  overflow-x: hidden;
}


a {
  color: inherit;
  text-decoration: none;
}


`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
