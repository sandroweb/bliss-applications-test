import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Card } from 'components/card';

import {
  StyledModal,
  Overlay,
  Container,
  Title,
  CloseButton,
} from './modal.styled';
import { ModalProps } from './modal.type';

export const Modal: FC<ModalProps> = ({ children, title, show, onClose }) => {
  return (
    <StyledModal show={show}>
      <Overlay />
      <Container>
        <Card>
          {onClose && (
            <CloseButton onClick={() => onClose(false)}>
              <AiOutlineClose />
            </CloseButton>
          )}
          {title && <Title>{title}</Title>}
          {children}
        </Card>
      </Container>
    </StyledModal>
  );
};
