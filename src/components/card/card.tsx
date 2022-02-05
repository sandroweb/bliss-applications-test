import { FC } from 'react';

import { StyledCard } from './card.styled';

export const Card: FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
