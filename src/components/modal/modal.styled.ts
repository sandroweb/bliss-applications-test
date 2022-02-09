import styled from 'styled-components';

import { fadeEffect } from 'helpers/styled/fade';

import { ModalProps } from './modal.type';

export const StyledModal = styled.div<{ show: ModalProps['show'] }>`
  ${({ show }) => fadeEffect(show)}
`;

export const Overlay = styled.div`
  background: ${({ theme }) => theme.palette.common.black};
  height: 100%;
  left: 0;
  opacity: 0.8;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  left: 10%;
  position: fixed;
  text-align: center;
  top: 25%;
  width: 80%;
  z-index: 1;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: ${({ theme }) => `${theme.spacing(1)}px`};
  top: ${({ theme }) => `${theme.spacing(1)}px`};
  background: transparent;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[200]}`};
  padding: ${({ theme }) => `0 ${theme.spacing(2)}px ${theme.spacing(1)}px`};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 20px;
  margin: ${({ theme }) => `${theme.spacing(0.5)}px 0 ${theme.spacing(1)}px`};
`;
