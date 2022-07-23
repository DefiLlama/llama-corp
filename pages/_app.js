import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";
import { useAnalytics } from '../hooks'


function MyApp({ Component, pageProps }) {

  useAnalytics()

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111629" />
        <meta name="msapplication-TileColor" content="#111629" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
