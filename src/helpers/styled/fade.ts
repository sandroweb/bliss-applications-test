import { css } from 'styled-components';

export const fadeEffect = (show?: boolean) => {
  return show
    ? css`
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s linear;
      `
    : css`
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.5s, opacity 0.5s linear;
      `;
};
