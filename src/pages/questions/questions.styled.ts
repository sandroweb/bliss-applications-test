import styled from 'styled-components';

import { TextField } from 'components/text-field';

export const Container = styled.div`
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1)}px auto 0;
  max-width: 1200px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: calc(100% - ${({ theme }) => theme.spacing(2)}px);
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
