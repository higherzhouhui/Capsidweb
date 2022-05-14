import Head from 'next/head';
import {createContext, useEffect, useState} from 'react';

import type {AppProps} from 'next/app';

import Header from '@/components/header';
import ToolTipComp from '@/components/tooltip';
import {AppContainer} from '@/styles/app';
import {GlobalStyle} from '@/styles/globals';
import {Event, useDebounce} from '@/util';

export interface MyScale {
  x: number;
  y: number;
}
// 创造一个上下文
export const AppContext = createContext<MyScale>({x: 1, y: 1});

function MyApp({Component, pageProps}: AppProps) {
  const [showToolTip, setshowToolTip] = useState(true);
  const [scale, setScale] = useState({x: 1, y: 1});

  const [onResize] = useDebounce(
    () => {
      const mathRound = (num: number) => {
        return Math.round(100 * num) / 100;
      };
      const root = document.getElementById('root');
      if (root) {
        let cx = root.clientWidth / 1440 / window.devicePixelRatio;
        if (cx > 1) {
          cx = (cx - 1) * 0.8 + 1;
        } else if (cx < 1) {
          cx = 1 - (1 - cx) * 0.8;
        }
        let cy = root.clientHeight / 900 / window.devicePixelRatio;
        if (cy > 1) {
          cy = (cy - 1) * 0.8 + 1;
        } else if (cy < 1) {
          cy = 1 - (1 - cy) * 0.8;
        }
        setScale({x: mathRound(cx), y: mathRound(cy)});
      }
    },
    300,
    []
  );

  useEffect(() => {
    Event.addListener('firstClick', () => {
      setshowToolTip(false);
    });
    onResize();
    window.addEventListener('resize', onResize);
  }, [onResize]);
  return (
    <AppContext.Provider value={scale}>
      <AppContainer id='root'>
        <Head>
          <title>Capsid</title>
        </Head>
        <div className='background'>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </div>
        {showToolTip ? <ToolTipComp /> : null}
      </AppContainer>
    </AppContext.Provider>
  );
}

export default MyApp;
