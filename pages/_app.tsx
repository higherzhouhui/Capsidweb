import type {AppProps} from 'next/app';

import Bg from '@/components/bg';
import Header from '@/components/header';
import {AppContainer} from '@/styles/app';
import {GlobalStyle} from '@/styles/globals';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Bg />
    </AppContainer>
  );
}

export default MyApp;
