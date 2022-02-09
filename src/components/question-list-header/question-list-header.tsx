import { FC } from 'react';

import {
  StyledQuestionListHeader,
  Title,
  SubTitle,
} from './question-list-header.styled';
import { HeaderProps } from './question-list-header.type';

export const QuestionListHeader: FC<HeaderProps> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <StyledQuestionListHeader>
      <Title>{title}:</Title>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </StyledQuestionListHeader>
  );
};
