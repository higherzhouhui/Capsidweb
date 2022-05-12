import Image from 'next/image';
import {FC, useCallback, useEffect, useRef, useState} from 'react';

import type {NextPage} from 'next';

import {
  AircraftComp,
  Company,
  Contact,
  Description,
  DownArrow,
  HomeContainer,
  MiddleLogo,
} from '@/styles/home';
import {SvgIcon} from '@/uikit';

const Home: NextPage = () => {
  // 当前处于第几页
  let [currentPage, setCurrentPage] = useState(1);
  // 判断是向下还是向上滚动的标志位
  const [scrollDown, setScrollDown] = useState(true);
  // 获取当前dom节点
  const ref: any = useRef(null);
  // 判断当前是否有动画的标志位，保证动画的顺序执行
  let isAnimation = false;
  /**
   * 向下滑动
   */
  const pageDown = () => {
    if (currentPage >= 3) {
      setCurrentPage(3);
    } else {
      currentPage += 1;
      setCurrentPage(currentPage);
      isAnimation = true;
    }
    setScrollDown(true);
  };
  /**
   * 向上滑动
   */
  const pageUp = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      currentPage -= 1;
      setCurrentPage(currentPage);
    }
    setScrollDown(false);
  };
  /**
   * 监听mousewheel的变化并使用防抖
   */
  const [scrollRenderHandler] = useDebounce(
    (e: any) => {
      if (isAnimation) {
        return;
      }
      const wheelEv = e as WheelEvent;
      if (wheelEv.deltaY > 0) {
        pageDown();
      }
      if (wheelEv.deltaY < 0) {
        pageUp();
      }
    },
    300,
    []
  );
  const [touchUp] = useDebounce(
    () => {
      pageUp();
    },
    300,
    []
  );

  const [touchDown] = useDebounce(
    () => {
      pageDown();
    },
    300,
    []
  );
  useEffect(() => {
    document.addEventListener('mousewheel', scrollRenderHandler);
    // 移动端监听touch
    EventUtil.listenTouchDirection(
      document,
      true,
      touchUp,
      false,
      touchDown,
      false
    );
    if (ref && ref.current) {
      ref?.current.addEventListener('animationend', () => {
        if (isAnimation) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          isAnimation = false;
        }
      });
    }
    return (): void => {
      document.removeEventListener('mousewheel', scrollRenderHandler);
    };
  }, [scrollRenderHandler, touchUp, touchDown]);
  return (
    <HomeContainer ref={ref}>
      <StarComp
        className={
          currentPage === 1
            ? 'StarCompOne'
            : currentPage === 2
            ? scrollDown
              ? 'StarCompTwo'
              : 'startCompTwoBack'
            : 'StarCompThree'
        }
        height={656}
        width={656}
      />
      <DescripTionComp
        className={
          currentPage === 1
            ? 'descriptionOne'
            : currentPage === 2
            ? scrollDown
              ? 'descriptionTwo'
              : 'descriptionTwoBack'
            : 'descriptionThree'
        }
      />
      <MiddleLogoComp
        className={
          currentPage === 1
            ? 'logoOne'
            : currentPage === 2
            ? scrollDown
              ? 'logoTwo'
              : 'logoTwoBack'
            : 'logoThree'
        }
      />
      <ContactComp />
      <CompanyComp className={currentPage === 3 ? 'companyThree' : ''} />
      {currentPage !== 3 ? <DownArrowComp /> : null}
    </HomeContainer>
  );
};

type StarCompProps = {
  width: number;
  height: number;
  className?: string;
};
const StarComp: FC<StarCompProps> = ({width, height, className}) => {
  return (
    <AircraftComp className={className} height={width} width={height}>
      <div
        className={`dapp ${
          className === 'StarCompOne'
            ? 'dappOne'
            : className === 'StarCompTwo'
            ? 'dappTwo'
            : className === 'StarCompThree'
            ? 'dappThree'
            : 'dappTwoBack'
        }`}
      >
        <div className='wrapper'>
          <div className='outline' />
          <div className='content'>
            <div className='text'>
              <a href='https://pd-1st.com' rel='noreferrer' target='_blank'>
                PD-1
              </a>
            </div>
            <div className='xd1' />
            <div className='xd2' />
          </div>
        </div>
      </div>
      <div className='rotate'>
        <div
          className={`aircraft ${
            className === 'StarCompOne'
              ? 'aircraftOne'
              : className === 'StarCompTwo'
              ? 'aircraftTwo'
              : className === 'StarCompThree'
              ? 'aircraftThree'
              : 'aircraftTwoBack'
          }`}
        >
          <SvgIcon height={40} name='aircft' width={40} />
        </div>
      </div>
      <div
        className={`tuoyuan ${
          className === 'StarCompThree' ? 'tuoyuanThree' : ''
        }`}
      />
      <div className='img'>
        <Image alt='star' layout='fill' src='/static/images/star.png' />
      </div>
    </AircraftComp>
  );
};

type MiddleLogoProps = {
  className?: string;
};
const MiddleLogoComp: FC<MiddleLogoProps> = ({className}) => {
  return (
    <MiddleLogo className={className}>
      <Image
        alt='logotext'
        height={155}
        src='/static/images/logobig.png'
        width={593}
      />
    </MiddleLogo>
  );
};

type DescriptionCompProps = {
  className?: string;
};
const DescripTionComp: FC<DescriptionCompProps> = ({className}) => {
  return (
    <Description className={className}>
      <div className='title'>BUILD A SUSTAINABLE NFT ECOSYSTEM</div>
      <div className='text'>
        Capsid is an NFT derivative protocol that empowers NFT owners to
        issue“Rights of Use”to generate incomefrom NFT derivatives & services.
      </div>
    </Description>
  );
};

const ContactComp = () => {
  return (
    <Contact>
      <a href='https://t.me/CapsidOne' rel='noreferrer' target='_blank'>
        <SvgIcon height={16} name='contact' width={16} />
      </a>
      <a href='mailto: contact@capsid.one'>
        <SvgIcon height={16} name='email' width={16} />
      </a>
    </Contact>
  );
};

const CompanyComp: FC<DescriptionCompProps> = ({className}) => {
  return (
    <Company className={className}>
      <div className='wrapper'>
        <div
          className={`inverstors ${
            className === 'companyThree' ? 'inverstorsThree' : ''
          }`}
        >
          INVESTORS
        </div>
        <div
          className={`fiveImages ${
            className === 'companyThree' ? 'imagesThree' : ''
          }`}
        >
          <div className='aimage'>
            <Image alt='c1' layout='fill' src='/static/images/c1.png' />
          </div>
          <div className='aimage'>
            <Image alt='c1' layout='fill' src='/static/images/c2.png' />
          </div>
          <div className='aimage'>
            <Image alt='c1' layout='fill' src='/static/images/c3.png' />
          </div>
          <div className='aimage'>
            <Image alt='c1' layout='fill' src='/static/images/c4.png' />
          </div>
          <div className='aimage'>
            <Image alt='c1' layout='fill' src='/static/images/c5.png' />
          </div>
        </div>
        <div
          className={`fiveTexts ${
            className === 'companyThree' ? 'textsThree' : ''
          }`}
        >
          <div className='atext'>
            <p className='title'>Johana</p>
            <p className='adescription'>Partner</p>
            <p className='adescription'>@ Helix Fund</p>
          </div>
          <div className='atext'>
            <p className='title'>Steve</p>
            <p className='adescription'>Co-Founder</p>
            <p className='adescription'>@ Crust Network</p>
          </div>
          <div className='atext'>
            <p className='title'>Joe</p>
            <p className='adescription'>Founder @ Substreight</p>
            <p className='adescription'>Advisor@ YGG</p>
          </div>
          <div className='atext'>
            <p className='title'>Tyler</p>
            <p className='adescription'>Head of Global Business</p>
            <p className='adescription'>@ Huobi</p>
          </div>
          <div className='atext'>
            <p className='title'>David</p>
            <p className='adescription'>COO @ Maple Media</p>
            <p className='adescription'>Ex-Googler</p>
          </div>
        </div>
      </div>
    </Company>
  );
};

const DownArrowComp: FC<DescriptionCompProps> = ({className}) => {
  return (
    <DownArrow>
      <div className='wrapper'>
        <div className='content'>
          <div className='arrowMain' />
          <div className='arrow' />
        </div>
      </div>
    </DownArrow>
  );
};

export function useDebounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  deps: any[]
): [T, () => void] {
  const timer = useRef<number>();
  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  const run = useCallback((...args: any) => {
    cancel();
    timer.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  }, deps);
  return [run as T, cancel];
}

const EventUtil = {
  addHandler(element: any, type: any, handler: any) {
    if (element.addEventListener)
      element.addEventListener(type, handler, false);
    else if (element.attachEvent) element.attachEvent(`on${type}`, handler);
    else element[`on${type}`] = handler;
  },
  removeHandler(element: any, type: any, handler: any) {
    if (element.removeEventListener)
      element.removeEventListener(type, handler, false);
    else if (element.detachEvent) element.detachEvent(`on${type}`, handler);
    else element[`on${type}`] = handler;
  },
  /**
   * 监听触摸的方向
   * @param target            要绑定监听的目标元素
   * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
   * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
   * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
   * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
   * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
   */
  listenTouchDirection(
    target: any,
    isPreventDefault: any,
    upCallback: any,
    rightCallback: any,
    downCallback: any,
    leftCallback: any
  ) {
    this.addHandler(target, 'touchstart', handleTouchEvent);
    this.addHandler(target, 'touchend', handleTouchEvent);
    this.addHandler(target, 'touchmove', handleTouchEvent);
    let startX: any;
    let startY: any;
    function handleTouchEvent(event: any) {
      // eslint-disable-next-line default-case
      switch (event.type) {
        case 'touchstart':
          startX = event.touches[0].pageX;
          startY = event.touches[0].pageY;
          break;
        case 'touchend':
          // eslint-disable-next-line no-case-declarations
          const spanX = event.changedTouches[0].pageX - startX;
          // eslint-disable-next-line no-case-declarations
          const spanY = event.changedTouches[0].pageY - startY;

          if (Math.abs(spanX) > Math.abs(spanY)) {
            // 认定为水平方向滑动
            if (spanX > 30) {
              // 向右
              if (rightCallback) rightCallback();
            } else if (spanX < -30) {
              // 向左
              if (leftCallback) leftCallback();
            }
          } else {
            // eslint-disable-next-line no-lonely-if
            if (spanY > 30) {
              // 向下
              if (downCallback) downCallback();
            } else if (spanY < -30) {
              // 向上
              if (upCallback) upCallback();
            }
          }

          break;
        case 'touchmove':
          // 阻止默认行为
          if (isPreventDefault) event.preventDefault();
          break;
      }
    }
  },
};

export default Home;
