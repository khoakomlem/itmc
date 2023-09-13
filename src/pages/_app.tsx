import '@fontsource/inter/400.css';
import '@fontsource/inter/800.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/800.css';
import '@/styles/globals.css';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
  dehydratedState: unknown;
}> & {
  readonly Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>ITMC</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
