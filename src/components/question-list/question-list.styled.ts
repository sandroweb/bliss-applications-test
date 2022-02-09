import styled, { css } from 'styled-components';

export const StyledQuestionList = styled.ul<{ loadingState?: boolean }>`
  list-style-type: none;
  padding: 0;
  transition: opacity 0.5s ease-in-out;
  ${({ loadingState }) => {
    return loadingState
      ? css`
          opacity: 0.5;
          pointer-events: none;
          transition: none;
        `
      : ``;
  }}
`;
export const StyledQuestionItem = styled.li`
  display: block;
`;

export const QuestionItemTitle = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: space-between;
  .icon {
    svg {
      display: inline-block;
    }
  }
`;
