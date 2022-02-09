import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  margin: ${({ theme }) => theme.spacing(1)}px auto 0;
  max-width: 1200px;
  width: calc(100% - ${({ theme }) => theme.spacing(2)}px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageCt = styled.div`
  border-radius: 5px;
  margin-bottom: ${({ theme }) => `${theme.spacing(1)}px`};
  margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
  min-width: 50%;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export const DetailsTitle = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${({ theme }) => `${theme.spacing(0.5)}px`};
`;

export const DetailsDateCt = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  justify-content: end;
  font-size: 15px;
`;

export const DetailsContentTop = styled.div`
  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

export const ChoicesList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ChoicesItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(1)}px`} 0;
  + li {
    border-top: ${({ theme }) => `1px solid ${theme.palette.grey[200]}`};
  }
`;

export const ChoiceItemRight = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Choice = styled.span`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const DetailsBottom = styled.div`
  display: flex;
  justify-content: end;
`;
