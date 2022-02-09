import { FC } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Card } from 'components/card';

import {
  QuestionItemTitle,
  StyledQuestionItem,
  StyledQuestionList,
} from './question-list.styled';
import { QuestionListProps } from './question-list.type';

export const QuestionList: FC<QuestionListProps> = ({ questions, loading }) => {
  return (
    <StyledQuestionList loadingState={loading}>
      {questions.map(({ id, question }, i) => {
        return (
          <StyledQuestionItem key={i}>
            <Link to={`/questions/${id}`}>
              <Card hoverEffect>
                <QuestionItemTitle>
                  <span className="text">{question}</span>
                  <span className="icon">
                    <AiOutlineArrowRight />
                  </span>
                </QuestionItemTitle>
              </Card>
            </Link>
          </StyledQuestionItem>
        );
      })}
    </StyledQuestionList>
  );
};
