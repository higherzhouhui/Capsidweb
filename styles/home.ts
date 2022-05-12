import styled from 'styled-components';
// 由于有动画采用的是绝对定位，需要定义层级覆盖
const LayoutZIndex = {
  Company: 9,
  Logo: 999,
  Stat: 99,
  PD1: 110,
  Craft: 109,
  Title: 90,
  ArrowDown: 8888,
  Contact: 9999,
};

export const HomeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  overflow: hidden;
  @keyframes StarCompTwo {
    0% {
      left: 50%;
      top: 50%;
    }
    30% {
      left: 45%;
      top: 55%;
    }
    100% {
      left: 100%;
      top: 50%;
      width: 860px;
      height: 860px;
    }
  }
  @keyframes StarCompThree {
    0% {
      left: 100%;
      top: 50%;
      width: 860px;
      height: 860px;
    }
    30% {
      left: 110%;
      top: 45%;
    }
    100% {
      left: 50%;
      top: 100%;
      width: 800px;
      height: 800px;
      border: none;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes descriptionThree {
    0% {
      display: block;
      top: 182px;
      left: 120px;
      opacity: 1;
    }
    20% {
      display: block;
      top: 200px;
      left: 120px;
    }
    100% {
      display: block;
      opacity: 0;
      top: -100vh;
      left: 120px;
    }
  }
  .StarCompOne {
    left: 50%;
    top: 50%;
  }
  .StarCompTwo {
    animation: StarCompTwo 3s forwards;
  }
  .startCompTwoBack {
    left: 100%;
    top: 50%;
    width: 860px;
    height: 860px;
  }
  .StarCompThree {
    animation: StarCompThree 3s forwards;
  }
  .logoOne {
    opacity: 1;
  }
  .logoTwo {
    animation: fadeOut 3s forwards;
  }
  .logoTwoBack {
    opacity: 0;
  }
  .logoThree {
    opacity: 0;
  }
  .descriptionOne {
    opacity: 0;
  }
  .descriptionTwo {
    animation: fadeIn 3s forwards 1s;
  }
  .descriptionThree {
    animation: descriptionThree 3s forwards;
  }
  .companyThree {
    display: block;
  }
  .descriptionTwoBack {
    opacity: 1;
  }
`;

export interface AircraftProps {
  width: number;
  height: number;
  time?: number;
}
export const AircraftComp = styled.div<AircraftProps>`
  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};
  box-sizing: border-box;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: ${LayoutZIndex.Stat};
  @keyframes spin {
    from {
      transform: rotate(135deg);
    }
    to {
      transform: rotate(-225deg);
    }
  }
  @keyframes dappTwo {
    from {
      top: ${({width}) =>
        `${((Math.sqrt(2) - 1) * width) / 2 / Math.sqrt(2) - 14 / 2}px`};
      left: ${({height}) =>
        `${((Math.sqrt(2) - 1) * height) / 2 / Math.sqrt(2) - 14 / 2}px`};
    }
    to {
      top: 143px;
      left: 94px;
    }
  }
  @keyframes dappOutlineAni {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
  .tuoyuan {
    width: 140%;
    height: 50%;
    box-sizing: border-box;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 25%;
    left: 0;
    z-index: 666;
    border-radius: 50%;
    transform: rotate(145deg) translate(12%, 24%);
  }
  .tuoyuanThree {
    animation: fadeOut 3s forwards;
  }
  .dappOne {
    top: ${({width}) =>
      `${((Math.sqrt(2) - 1) * width) / 2 / Math.sqrt(2) - 14 / 2}px`};
    left: ${({height}) =>
      `${((Math.sqrt(2) - 1) * height) / 2 / Math.sqrt(2) - 14 / 2}px`};
  }
  .dappTwo {
    animation: dappTwo 3s forwards;
  }
  .dappTwoBack {
    top: 143px;
    left: 91px;
  }
  .dappThree {
    display: none;
  }
  .dapp {
    width: 14px;
    height: 14px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    z-index: ${LayoutZIndex.PD1};
    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      &:hover {
        .content {
          display: block;
          animation: fadeIn 0.8s forwards;
        }
      }
    }
    .outline {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(5);
      border: 1px solid #fff;
      box-sizing: border-box;
      animation: dappOutlineAni 3s infinite;
    }
    .content {
      opacity: 0;
      display: none;
      width: 200px;
      height: 70px;
      position: absolute;
      top: -54px;
      left: -193px;
    }
    .xd2 {
      width: 80px;
      height: 0;
      border-bottom: 2px dashed #fff;
      position: absolute;
      top: 62px;
      left: 105px;
      opacity: 0.5;
    }
    .xd1 {
      width: 40px;
      height: 0;
      border-bottom: 2px dashed #fff;
      position: absolute;
      top: 45px;
      left: 67px;
      opacity: 0.5;
      transform: rotate(45deg);
    }
    .text {
      width: 69px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
    }
  }
  .rotate {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${LayoutZIndex.Craft};
    animation: ${({time}) => `spin ${time || 25}s infinite linear`};
  }
  .aircraft {
    width: 40px;
    height: 40px;
    transform: rotate(225deg);
    margin: ${({width}) =>
      `${((Math.sqrt(2) - 1) * width) / 2 / Math.sqrt(2) - 40 / 2}px`};
  }
  .aircraftOne {
    display: inline-block;
  }
  .aircraftTwo {
    opacity: 0;
  }
  .aircraftTwoBack {
    opacity: 0;
  }
  .aircraftThree {
    display: none;
  }
  .img {
    width: 91%;
    height: 91%;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MiddleLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${LayoutZIndex.Logo};
`;

export const Description = styled.div`
  opacity: 0;
  position: absolute;
  top: 182px;
  left: 120px;
  z-index: ${LayoutZIndex.Title};
  .title {
    width: 766px;
    height: 192px;
    line-height: 96px;
    font-size: 64px;
    font-weight: bold;
    color: #fff;
  }
  .text {
    width: 469px;
    height: 87px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    line-height: 29px;
  }
`;

export const Contact = styled.div`
  z-index: ${LayoutZIndex.Contact};
  position: absolute;
  left: 120px;
  bottom: 80px;
  a:first-child {
    margin-bottom: 24px;
  }
`;

export const Company = styled.div`
  z-index: ${LayoutZIndex.Company};
  position: absolute;
  width: 100%;
  top: 56px;
  left: 0;
  display: none;
  @keyframes inverstorsThree {
    from {
      margin-top: -300px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes imagesThree {
    from {
      left: 100vw;
    }
    to {
      left: 120px;
    }
  }
  @keyframes textsThree {
    from {
      left: -100vw;
    }
    to {
      left: 120px;
    }
  }
  .wrapper {
    position: relative;
  }
  .inverstors {
    text-align: center;
    font-size: 56px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .inverstorsOne {
    top: 0;
  }
  .fiveImages {
    display: flex;
    justify-content: space-around;
    top: 130px;
    position: absolute;
    min-width: calc(100vw - 240px);
    .aimage {
      position: relative;
      height: 180px;
      width: 180px;
    }
  }
  .fiveImagesOne {
    left: 100vw;
  }
  .fiveTexts {
    display: flex;
    justify-content: space-around;
    top: 320px;
    left: 0;
    position: absolute;
    min-width: calc(100vw - 240px);
    color: #fff;
    opacity: 0.5;
    .atext {
      text-align: center;
      color: #fff;
      flex: 1;
      width: 180px;
    }
    .title {
      line-height: 27px;
      font-weight: bold;
      font-size: 18px;
    }
    .adescription {
      line-height: 21px;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .fiveTextsOne {
    left: -100vw;
  }
  .inverstorsThree {
    animation: inverstorsThree 3s forwards;
  }
  .imagesThree {
    animation: imagesThree 3s forwards;
  }
  .textsThree {
    animation: textsThree 3s forwards;
  }
`;

export const DownArrow = styled.div`
  position: absolute;
  width: 8px;
  height: 33px;
  overflow: hidden;
  right: 120px;
  bottom: 80px;
  z-index: ${LayoutZIndex.ArrowDown};
  @keyframes downArrow {
    0% {
      top: -33px;
    }
    30% {
      top: 0;
    }
    70% {
      top: 0;
    }
    100% {
      top: 33px;
    }
  }
  .wrapper {
    position: relative;
    width: 1px;
    height: 25px;
    margin-left: 3px;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -33px;
    animation: downArrow 3s infinite;
    .arrowMain {
      background: #fff;
      width: 100%;
      height: 100%;
    }
    .arrow {
      position: absolute;
      top: 25px;
      transform: translateX(-45%);
      width: 0;
      height: 0;
      border: 4px solid transparent;
      border-top-color: #fff;
    }
  }
`;
