import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.palette.common.black};
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 5px;
  left: 10%;
  padding: 15px;
  position: fixed;
  text-align: center;
  top: 25%;
  width: 80%;
  z-index: 2;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;
  margin: 15px 0;
`;
