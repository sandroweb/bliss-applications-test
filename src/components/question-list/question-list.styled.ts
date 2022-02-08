import styled from 'styled-components';

export const StyledQuestionList = styled.ul`
  list-style-type: none;
  padding: 0;
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
