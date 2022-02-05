import styled from 'styled-components';

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 5px;
  box-shadow: 0 0 1px 0 ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 15px;
  padding: 15px;
`;
