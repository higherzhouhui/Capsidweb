/* eslint-disable react/display-name */
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, useContext, useEffect, useRef, useState} from 'react';

import {HeaderContainer, Modal} from '@/components/header/style';
import {AppContext, MyScale} from '@/pages/_app';
import {SvgIcon} from '@/uikit';
import {Event} from '@/util';
export const Header: FC = memo(() => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isShow, setIsshow] = useState(false);
  // 使用上下文,接收缩放比
  const myScale = useContext(AppContext);
  // 播放
  const handleAudioPlayClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      setIsPlay(true);
    }
  };
  // 暂停
  const handleAudioStopClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlay(false);
    }
  };
  const click = () => {
    handleAudioPlayClick();
    Event.emit('firstClick', {hide: true});
    document.removeEventListener('click', click);
  };
  const onClose = () => {
    setIsshow(false);
  };
  useEffect(() => {
    document.addEventListener('click', click);
  }, []);

  return (
    <HeaderContainer {...myScale}>
      <div className='logoContainer'>
        <Link passHref href='/'>
          <a>
            <SvgIcon
              height={24 * myScale.y}
              name='logo'
              width={110 * myScale.x}
            />
          </a>
        </Link>
      </div>
      <div className='menu'>
        <div className='menu-item'>
          <a href='/'>Home</a>
          <div className='divison' />
        </div>
        <div className='menu-item'>
          <a
            href='https://capsid.gitbook.io/capsid-token/'
            rel='noreferrer'
            target='_blank'
          >
            Docs
          </a>
          <div className='divison' />
        </div>

        <div
          className='menu-item'
          onClick={() => {
            setIsshow(true);
          }}
        >
          Products
          <div className='divison' />
        </div>
        <div className='sound'>
          {isPlay ? (
            <SvgIcon
              height={16 * myScale.y}
              name='sound'
              width={16 * myScale.x}
              onClick={handleAudioStopClick}
            />
          ) : (
            <SvgIcon
              height={16 * myScale.y}
              name='noSound'
              width={16 * myScale.x}
              onClick={handleAudioPlayClick}
            />
          )}

          <audio
            controls
            loop
            ref={audioRef}
            src='https://oss.pd-1st.com/pd1/uploads/client/2022-5-13/YmcubXA0MTY1MjQxMjEyMzI1MA==bg.mp4'
            style={{
              opacity: 0,
              width: 0,
              height: 0,
            }}
          />
        </div>
      </div>
      {isShow ? <ModalComp myScale={myScale} onClose={onClose} /> : null}
    </HeaderContainer>
  );
});

type ModalCompProps = {
  onClose: () => void;
  myScale: MyScale;
};
const ModalComp: FC<ModalCompProps> = memo(({onClose, myScale}) => {
  return (
    <Modal {...myScale}>
      <div className='mask' onClick={onClose} />
      <div className='content'>
        <Image
          alt='commming'
          height={96 * myScale.x}
          src='/static/images/comming.png'
          width={96 * myScale.x}
        />
        <span>coming soon...</span>
      </div>
    </Modal>
  );
});
Header.displayName = 'Header';
export default Header;
