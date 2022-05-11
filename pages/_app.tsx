import type {AppProps} from 'next/app';

import Header from '@/components/header';
import {AppContainer} from '@/styles/app';
import {GlobalStyle} from '@/styles/globals';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppContainer>
      <div className='background'>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </div>
    </AppContainer>
  );
}

export default MyApp;
