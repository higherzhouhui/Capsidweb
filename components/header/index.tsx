import Image from 'next/image';
import Link from 'next/link';
import {FC, memo, useRef, useState} from 'react';

import {HeaderContainer} from '@/components/header/style';
import {SvgIcon} from '@/uikit';
export const Header: FC = memo(() => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);

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
  return (
    <HeaderContainer>
      <div className='logoContainer'>
        <Link passHref href='/'>
          <a>
            <Image
              alt='logo'
              height={24}
              src='/static/images/capsid-logo.png'
              width={109}
            />
          </a>
        </Link>
      </div>
      <div className='menu'>
        <div className='menu-item'>
          <Link passHref href='/'>
            <a>Home</a>
          </Link>
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

        <div className='menu-item'>
          <a href='' rel='noreferrer'>
            Products
          </a>
          <div className='divison' />
        </div>
        <div className='sound'>
          {isPlay ? (
            <SvgIcon
              height={16}
              name='sound'
              width={16}
              onClick={handleAudioStopClick}
            />
          ) : (
            <SvgIcon
              height={16}
              name='noSound'
              width={16}
              onClick={handleAudioPlayClick}
            />
          )}

          <audio
            autoPlay
            controls
            loop
            ref={audioRef}
            src='/static/audio/test.mp3'
            style={{
              opacity: 0,
              width: 0,
              height: 0,
            }}
          />
        </div>
      </div>
    </HeaderContainer>
  );
});

Header.displayName = 'Header';
export default Header;
