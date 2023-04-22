import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import { ViewportProvider } from '../src/context/ViewPortContext';
import { OverflowProvider } from '../src/context/overflowContext';
import Header from '../src/components/header/Header';
import Footer from '../src/components/Footer';

import '../src/assets/scss/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#288890" />

      <Head>
        <link rel="shortcut icon" href="/mentor-ocean-favicon.png" />
        <title>Mentor Ocean</title>
      </Head>
      <ViewportProvider>
        <OverflowProvider>
          <div id="page_container" className="overflow-hidden">
            <Header />
            <main id="main_content" className="pt-8 lg:pt-0">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </OverflowProvider>
      </ViewportProvider>
    </>
  );
}

export default MyApp;
