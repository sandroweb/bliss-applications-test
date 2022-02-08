import { FC, useEffect, useState } from 'react';
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

import {
  Choice,
  ChoiceItemRight,
  ChoicesItem,
  ChoicesList,
  Container,
  Content,
  DetailsBottom,
  DetailsDateCt,
  DetailsTitle,
  ImageCt,
  StyledImage,
  Votes,
} from './question.styled';

export const QuestionDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [questionObject, setQuestion] = useState<Question>();

  const handleVote = (vote: string) => {
    if (questionObject) {
      updateVote(questionObject, vote).then((res) => {
        console.warn('res', res);
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
        <Button
          color="secondary"
          iconStart={<AiOutlineArrowLeft />}
          onClick={() => navigate('/questions')}
        >
          Back to List
        </Button>
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
          <Button color="primary" iconEnd={<AiOutlineShareAlt />}>
            Share
          </Button>
        </DetailsBottom>
      </Container>
    );
  }
  return null;
};
