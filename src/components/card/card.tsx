import { FC } from 'react';

import { StyledCard } from './card.styled';
import { CardProps } from './card.type';

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};
