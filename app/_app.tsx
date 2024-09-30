// app/_app.tsx

import { AppProps } from 'next/app'; // Import AppProps type
import { LoadingProvider } from './context/LoadingContext';

function MyApp({ Component, pageProps }: AppProps) { // Type the props
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

export default MyApp;
