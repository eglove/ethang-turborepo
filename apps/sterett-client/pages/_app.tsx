import 'normalize.css/normalize.css';
import '../styles/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import '../styles/global.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ToastContainer } from 'react-toastify';

Router.events.on('routeChangeStart', () => {
  return NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  return NProgress.done();
});
Router.events.on('routeChangeError', () => {
  return NProgress.done();
});

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      {/* @ts-expect-error this is fine */}
      <Hydrate state={pageProps?.dehydratedState as unknown}>
        <Head>
          <title>Sterett Creek Village Trustee Admin</title>
        </Head>
        <main>
          <ToastContainer />
          {/* @ts-expect-error use as Element */}
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
