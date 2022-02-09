import styled, { css } from 'styled-components';

import { CardProps } from './card.type';

export const StyledCard = styled.div<CardProps>`
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: ${({ theme }) => {
    return `0 3px 4px 0px ${theme.palette.grey[400]}`;
  }};
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${({ hoverEffect }) =>
    hoverEffect &&
    css`
      &:hover {
        box-shadow: ${({ theme }) => {
          return `0 1px 4px 1px ${theme.palette.grey[400]}`;
        }};
      }
      &:active {
        background: ${({ theme }) => theme.palette.grey[50]};
      }
    `}
`;
