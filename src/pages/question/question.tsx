import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getQuestion, updateVote } from 'api/questions/service';
import { Question } from 'api/questions/types';

import { Card } from 'components/card';

import { Container } from './question.styled';

export const QuestionDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

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
    const { question, image_url, thumb_url, published_at, choices } =
      questionObject;

    return (
      <Container>
        <Card>
          <Link to="/questions">Back to List</Link>
          <h1>{question}</h1>
          <div>
            <img src={image_url} alt="" />
          </div>
          <div>
            <img src={thumb_url} alt="" />
          </div>
          <div>
            published_at:{new Date(published_at).toLocaleDateString('en-us')}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {choices?.map(({ votes, choice }, x) => (
              <div key={x}>
                <div>
                  {votes} - {choice}
                  <button onClick={() => handleVote(choice)}>Vote</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    );
  }
  return null;
};
