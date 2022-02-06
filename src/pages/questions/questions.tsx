import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getQuestions, Question } from 'api/questions/service';

import { Button } from 'components/button';
import { Card } from 'components/card';

import { useDebounce } from 'helpers/useDebounce';

import {
  Container,
  QuestionListHeader,
  Title,
  HeaderText,
  QuestionItemTitle,
  StyledTextField,
  LoadMore,
} from './questions.styled';

export const Questions: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>();
  const [page, setPage] = useState(0);

  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 400);

  useEffect(() => {
    setIsSearching(true);
    getQuestions({ page, filter: debouncedSearchTerm })
      .then((response) => {
        if (page === 0) {
          setQuestions(response.data);
        } else {
          setQuestions((prevQuestions) => [...prevQuestions, ...response.data]);
        }
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, [debouncedSearchTerm, page]);

  return (
    <>
      <QuestionListHeader>
        <Title>{'page title'}:</Title>
        <HeaderText>
          Choose the question to vote on or use the search field to find the
          question
        </HeaderText>
        <StyledTextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your search here"
          maxLength={70}
        />
      </QuestionListHeader>
      <Container>
        {questions.map(({ id, question }, i) => {
          return (
            <Link to={`/questions/${id}`} key={i}>
              <Card hoverEffect>
                <QuestionItemTitle>{question}</QuestionItemTitle>
              </Card>
            </Link>
          );
        })}

        {!!questions.length && (
          <LoadMore>
            <Button
              color="primary"
              disabled={isSearching}
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
              }}
            >
              Load More
            </Button>
          </LoadMore>
        )}
      </Container>
    </>
  );
};
