import styled from 'styled-components';
export const HeaderContainer = styled.div`
  padding: 0 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 0;
  top: 0;
  z-index: 9;
  .logoContainer {
    width: 109px;
    height: 72px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      text-decoration: none;
    }
  }
  .menu {
    width: 428px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-item {
      position: relative;
      height: 26px;
      &:hover .divison {
        opacity: 1;
      }
    }
    .divison {
      opacity: 0;
      position: absolute;
      width: 16px;
      height: 2px;
      background: #53b7ff;
      border-radius: 10px;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
    .sound {
      height: 26px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      display: inline;
    }
  }
`;
