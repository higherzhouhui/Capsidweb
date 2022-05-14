import {setTimeout} from 'timers';

import Image from 'next/image';
import {FC, useContext, useEffect, useRef, useState} from 'react';

import {AppContext} from './_app';

import type {NextPage} from 'next';

import {
  AircraftComp,
  Company,
  Contact,
  Description,
  DownArrow,
  HomeContainer,
  MiddleLogo,
  setWidth,
} from '@/styles/home';
import {SvgIcon} from '@/uikit';
import {useDebounce} from '@/util';

const Home: NextPage = () => {
  // 当前处于第几页
  let [currentPage, setCurrentPage] = useState(1);
  // 判断是向下还是向上滚动的标志位
  const [scrollDown, setScrollDown] = useState<boolean | null>(null);
  // 获取当前dom节点
  const ref: any = useRef(null);
  // 判断当前是否有动画的标志位，保证动画的顺序执行
  let isAnimation = false;
  // 使用上下文,接收缩放比
  const myScale = useContext(AppContext);
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
      isAnimation = true;
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
    10,
    []
  );
  useEffect(() => {
    // 滚动滑轮触发scrollFunc方法
    document.addEventListener('mousewheel', scrollRenderHandler);
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
  }, [scrollRenderHandler]);

  return (
    <HomeContainer ref={ref} {...myScale}>
      <StarComp
        className={`star${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
        currentPage={currentPage}
        height={656}
        scrollDown={scrollDown}
        width={656}
        {...myScale}
      />
      <DescripTionComp
        className={`description${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
      />
      <MiddleLogoComp
        className={`logo${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
      />
      <ContactComp />
      <CompanyComp
        className={`company${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
        currentPage={currentPage}
        scrollDown={scrollDown}
      />
      {currentPage !== 3 ? <DownArrowComp /> : null}
    </HomeContainer>
  );
};

type StarCompProps = {
  width: number;
  height: number;
  className?: string;
  currentPage: number;
  scrollDown: boolean | null;
  x: number;
  y: number;
};
const StarComp: FC<StarCompProps> = ({
  className,
  currentPage,
  scrollDown,
  x,
  y,
}) => {
  // 等待图片加载完成之后显示，视觉上更加自然
  const [show, setShow] = useState(false);
  const setStarWidth = () => {
    if (
      className === 'stardown2' ||
      className === 'stardown3' ||
      className === 'starback2'
    ) {
      setTimeout(() => {
        setWidth(860);
      }, 1000);
    } else if (className === 'starback1') {
      setTimeout(() => {
        setWidth(656);
      }, 1000);
    }
  };
  setStarWidth();
  return (
    <AircraftComp {...{x, y, op: show ? 1 : 0}} className={className}>
      <div
        className={`dapp dapp${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
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
      <div
        className={`rotate rotate${
          scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
        }${currentPage}`}
      >
        <div className='aircraft'>
          <SvgIcon height={40 * x} name='aircft' width={40 * x} />
        </div>
      </div>
      <div className='img'>
        <Image
          alt='star'
          layout='fill'
          quality={100}
          src='/static/images/star.png'
          onLoad={() => {
            setShow(true);
          }}
        />
        <div
          className={`gd gd${
            scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
          }${currentPage}`}
        >
          <Image
            alt='star'
            layout='fill'
            quality={100}
            src='/static/images/gd.png'
            onLoad={() => {
              setShow(true);
            }}
          />
        </div>
      </div>
    </AircraftComp>
  );
};

type MiddleLogoProps = {
  className?: string;
};
const MiddleLogoComp: FC<MiddleLogoProps> = ({className}) => {
  const myScale = useContext(AppContext);
  return (
    <MiddleLogo className={className}>
      <Image
        alt='logotext'
        height={155 * myScale.y}
        src='/static/images/logobig.png'
        width={593 * myScale.y}
      />
    </MiddleLogo>
  );
};

type DescriptionCompProps = {
  className?: string;
};

const DescripTionComp: FC<DescriptionCompProps> = ({className}) => {
  // 使用上下文,接收缩放比
  const myScale = useContext(AppContext);
  return (
    <Description className={className} {...myScale}>
      <div className='title'>BUILD A SUSTAINABLE NFT ECOSYSTEM</div>
      <div className='text'>
        Capsid is an NFT derivative protocol that empowers NFT owners to issue
        “Rights of Use” to generate income from NFT derivatives & services.
      </div>
    </Description>
  );
};

const ContactComp = () => {
  const myScale = useContext(AppContext);
  return (
    <Contact {...myScale}>
      <a href='https://twitter.com/the_pd1' rel='noreferrer' target='_blank'>
        <Image
          height={16 * myScale.y}
          src='/static/images/twitter.png'
          width={16 * myScale.y}
        />
      </a>
      <a href='https://t.me/CapsidOne' rel='noreferrer' target='_blank'>
        <Image
          height={16 * myScale.y}
          src='/static/images/capsid.png'
          width={16 * myScale.y}
        />
      </a>
      <a href='mailto: contact@capsid.one'>
        <Image
          height={16 * myScale.y}
          src='/static/images/email.png'
          width={16 * myScale.y}
        />
      </a>
    </Contact>
  );
};

type CompanyCompProps = {
  className?: string;
  currentPage: number;
  scrollDown: boolean | null;
};

const CompanyComp: FC<CompanyCompProps> = ({
  className,
  currentPage,
  scrollDown,
}) => {
  // 使用上下文,接收缩放比
  const myScale = useContext(AppContext);
  return (
    <Company className={className} {...myScale}>
      <div className='wrapper'>
        <div
          className={`investors investors${
            scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
          }${currentPage}`}
        >
          INVESTORS
        </div>
        <div
          className={`fiveImages fiveImages${
            scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
          }${currentPage}`}
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
          className={`fiveTexts fiveTexts${
            scrollDown ? 'down' : scrollDown === null ? 'default' : 'back'
          }${currentPage}`}
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
  const myScale = useContext(AppContext);
  return (
    <DownArrow className={className} {...myScale}>
      <div className='wrapper'>
        <div className='content'>
          <div className='bg'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantoub.png'
              width={24 * myScale.y}
            />
          </div>
          <div className='bg'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantoub.png'
              width={24 * myScale.y}
            />
          </div>
          <div className='bg'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantoub.png'
              width={24 * myScale.y}
            />
          </div>
          <div className='arrow1'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantou.png'
              width={24 * myScale.y}
            />
          </div>
          <div className='arrow2'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantou.png'
              width={24 * myScale.y}
            />
          </div>
          <div className='arrow3'>
            <Image
              alt='arrow'
              height={24 * myScale.y}
              src='/static/images/jiantou.png'
              width={24 * myScale.y}
            />
          </div>
        </div>
      </div>
    </DownArrow>
  );
};

export default Home;
