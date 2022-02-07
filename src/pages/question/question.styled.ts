import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1)}px auto 0;
  max-width: 1200px;
  width: calc(100% - ${({ theme }) => theme.spacing(2)}px);
`;
