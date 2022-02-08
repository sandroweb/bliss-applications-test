import styled from 'styled-components';

export const StyledQuestionListHeader = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: ${({ theme }) => {
    return `0 3px 4px 0px ${theme.palette.grey[400]}`;
  }};
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  padding: ${({ theme }) => `${theme.spacing(2)}px ${theme.spacing(1)}px`};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 35px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  overflow-wrap: anywhere;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
`;
