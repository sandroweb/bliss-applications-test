import styled from 'styled-components';

export const StyledShare = styled.div``;

export const ShareForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 0 5px 5px 0;
  }
`;

export const ShareDescription = styled.p<{ error?: boolean }>`
  color: ${({ theme, error }) => {
    const { palette } = theme;
    return error ? palette.error.dark : palette.text.primary;
  }};
  font-size: 18px;
  text-align: center;
`;
