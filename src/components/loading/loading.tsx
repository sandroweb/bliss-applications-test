import { FC } from 'react';

import { StyledLoading } from './loading.styled';
import { LoadingProps } from './loading.type';

export const Loading: FC<LoadingProps> = ({ show }) => {
  return (
    <StyledLoading show={show}>
      <div className="container">
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
      </div>
    </StyledLoading>
  );
};
