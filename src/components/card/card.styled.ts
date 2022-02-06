import styled, { css } from 'styled-components';

import { CardProps } from './card.type';

export const StyledCard = styled.div<CardProps>`
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${({ hoverEffect }) =>
    hoverEffect &&
    css`
      &:hover {
        box-shadow: ${({ theme }) => {
          return `inset 0 0 8px -4px ${theme.palette.primary.light}`;
        }};
      }
      &:active {
        background: ${({ theme }) => theme.palette.grey[300]};
      }
    `}
`;
