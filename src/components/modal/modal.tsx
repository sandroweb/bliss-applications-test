import { FC } from 'react';

import { Card } from 'components/card';

import { StyledModal, Overlay, Container, Title } from './modal.styled';
import { ModalProps } from './modal.type';

export const Modal: FC<ModalProps> = ({ children, title, show }) => {
  return (
    <StyledModal show={show}>
      <Overlay />
      <Container>
        <Card>
          {title && <Title>{title}</Title>}
          {children}
        </Card>
      </Container>
    </StyledModal>
  );
};
