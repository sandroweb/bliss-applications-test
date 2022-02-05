import styled from 'styled-components';

import { LoadingProps } from './loading.type';

export const StyledLoading = styled.div<LoadingProps>`
  @keyframes grow {
    from {
      transform: scale(0, 0);
      opacity: 0;
    }
    to {
      transform: scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes move {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(45px);
    }
  }

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 300ms ease-in-out;

  .container {
    height: 15px;
    display: flex;
    margin: 0 auto 20px;
    width: 105px;
    position: relative;
  }
  .circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.text.primary};
    animation: move 500ms linear 0ms infinite;
    margin-right: 30px;

    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
      animation: grow 500ms linear 0ms infinite;
    }

    &:last-child {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 0;
      animation: grow 500ms linear 0s infinite reverse;
    }
  }
`;
