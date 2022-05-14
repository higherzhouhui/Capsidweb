import styled from 'styled-components';

import {MyScale} from '@/pages/_app';
import {LayoutZIndex} from '@/styles/home';
export const HeaderContainer = styled.div.attrs((props: MyScale) => ({
  style: {
    padding: `0 ${props.x * 120}px`,
    height: `${props.y * 72}px`,
  },
}))`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: ${LayoutZIndex.Header};
  left: 0;
  top: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  .logoContainer {
    width: ${(props: MyScale) => `${props.x * 120}px`};
    height: ${(props: MyScale) => `${props.y * 24}px`};
    position: relative;
  }
  .menu {
    width: ${(props: MyScale) => `${props.x * 428}px`};
    height: ${(props: MyScale) => `${props.y * 26}px`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-item {
      position: relative;
      height: 100%;
      color: #fff;
      font-size: ${(props: MyScale) => `${props.x * 18}px`};
      font-family: 'HarmonyOs-Medium';
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover .divison {
        opacity: 1;
      }
    }
    .divison {
      opacity: 0;
      position: absolute;
      width: ${(props: MyScale) => `${props.x * 16}px`};
      height: 2px;
      background: #53b7ff;
      border-radius: ${(props: MyScale) => `${props.x * 10}px`};
      top: ${(props: MyScale) => `${props.y * 30}px`};
      left: 50%;
      transform: translateX(-50%);
    }
    .sound {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    a {
      color: #fff;
      font-size: ${(props: MyScale) => `${props.x * 18}px`};
      font-family: 'HarmonyOs-Medium';
      display: inline;
    }
  }
`;

export const Modal = styled.div.attrs((props: MyScale) => ({}))`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: ${LayoutZIndex.Modal};
  .mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(17, 21, 26, 0.8);
  }
  .content {
    width: ${(props: MyScale) => `${props.x * 586}px`};
    height: ${(props: MyScale) => `${props.y * 357}px`};
    background: #101217;
    border-radius: ${(props: MyScale) => `${props.x * 16}px`};
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  span {
    font-size: ${(props: MyScale) => `${props.x * 20}px`};
    font-family: 'HarmonyOs-Medium';
    line-height: ${(props: MyScale) => `${props.y * 30}px`};
    color: #2590ff;
  }
`;
