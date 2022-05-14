import styled from 'styled-components';

import {MyScale} from '@/pages/_app';
export interface ToolPosition extends MyScale {
  left: number;
  top: number;
}

export const ToolTip = styled.div.attrs((props: ToolPosition) => ({
  style: {
    left: props.left,
    top: props.top,
    width: `${250 * props.x}`,
  },
}))`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10001;
  padding: 4px 12px;
  box-sizing: border-box;
  background: rgba(30, 35, 43, 0.5);
  border-radius: ${(props: ToolPosition) => `${40 * props.x}px`};
  overflow: hidden;
  .svg {
    width: ${(props: ToolPosition) => `${16 * props.x}px`};
    height: ${(props: ToolPosition) => `${16 * props.x}px`};
    display: flex;
    align-items: center;
    margin-right: 9px;
  }
  .text {
    font-size: ${(props: ToolPosition) => `${14 * props.x}px`};
    line-height: ${(props: ToolPosition) => `${20 * props.x}px`};
    color: #fff;
  }
`;
