import { FC, useContext, useEffect, useState } from 'react';
import {
  AiOutlineShareAlt,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

import { getQuestion, updateVote } from 'api/questions/service';
import { Question } from 'api/questions/types';

import { Button } from 'components/button';
import { Card } from 'components/card';
import { ShareContext } from 'components/share/context/shareContext';
import { ToastContext } from 'components/toast/context/toastContext';

import {
  Choice,
  ChoiceItemRight,
  ChoicesItem,
  ChoicesList,
  Container,
  Content,
  DetailsBottom,
  DetailsDateCt,
  DetailsContentTop,
  DetailsTitle,
  ImageCt,
  StyledImage,
  Votes,
} from './question.styled';

export const QuestionDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setShareData } = useContext(ShareContext);
  const { setToastData } = useContext(ToastContext);

  const [questionObject, setQuestion] = useState<Question>();

  const handleVote = (vote: string) => {
    if (questionObject) {
      updateVote(questionObject, vote)
        .then((res) => {
          setToastData({
            severity: 'success',
            text: 'Your vote has been registered successfully!',
            show: true,
          });
          setQuestion(res.data);
        })
        .catch(() => {
          setToastData({
            severity: 'error',
            text: 'There was an error registering your vote. Try again later.',
            show: true,
          });
        });
    }
  };

  useEffect(() => {
    if (id) {
      getQuestion(parseInt(id, 10)).then((res) => {
        setQuestion(res.data);
      });
    }
  }, [id]);

  if (questionObject) {
    const { question, image_url, published_at, choices } = questionObject;

    return (
      <Container>
        <DetailsContentTop>
          <Button
            color="secondary"
            iconStart={<AiOutlineArrowLeft />}
            onClick={() => navigate('/questions')}
          >
            Back to List
          </Button>
        </DetailsContentTop>
        <Content>
          <ImageCt>
            <StyledImage src={image_url} width={600} height={400} alt="" />
          </ImageCt>
          <Card>
            <DetailsTitle>{question}</DetailsTitle>
            <DetailsDateCt>
              Published at: {new Date(published_at).toLocaleDateString('en-us')}
            </DetailsDateCt>
            <ChoicesList>
              {choices?.map(({ votes, choice }, x) => (
                <ChoicesItem key={x}>
                  <ChoiceItemRight>
                    <Choice>{choice}</Choice>
                    <Votes>{votes} votes</Votes>
                  </ChoiceItemRight>
                  <Button
                    onClick={() => handleVote(choice)}
                    iconEnd={<AiOutlineArrowRight />}
                  />
                </ChoicesItem>
              ))}
            </ChoicesList>
          </Card>
        </Content>
        <DetailsBottom>
          <Button
            color="primary"
            iconEnd={<AiOutlineShareAlt />}
            onClick={() =>
              setShareData({ show: true, url: window.location.href })
            }
          >
            Share
          </Button>
        </DetailsBottom>
      </Container>
    );
  }
  return null;
};
