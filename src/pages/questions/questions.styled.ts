import styled from 'styled-components';

import { TextField } from 'components/text-field';

export const Container = styled.div`
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1)}px auto 0;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: calc(100% - ${({ theme }) => theme.spacing(2)}px);
`;

export const QuestionListHeader = styled.div`
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

export const HeaderText = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
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

export const StyledTextField = styled(TextField)`
  max-width: 700px;
  width: 100%;
`;

export const SearchResultDescription = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  margin-top: 0;
  p {
    overflow-wrap: anywhere;
    max-width: 70%;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoadMore = styled.div`
  text-align: center;
`;
