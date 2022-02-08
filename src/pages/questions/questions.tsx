import { FC, useEffect, useRef, useState } from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { getQuestions } from 'api/questions/service';
import { Question } from 'api/questions/types';

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
  SearchResultDescription,
  LoadMore,
} from './questions.styled';

export const Questions: FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchTerm, setSearchTerm] = useState<string | null>(
    searchParams.get('filter')
  );
  const debouncedSearchTerm = useDebounce<string>(searchTerm || '', 400);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>();
  const [page, setPage] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const isSerachPage = searchTerm !== null;

  const backToList = () => {
    setSearchTerm(null);
    navigate('/questions');
  };

  useEffect(() => {
    getQuestions({ page, filter: debouncedSearchTerm })
      .then((response) => {
        if (page === 0) {
          setQuestions(response.data);
        } else {
          setQuestions((prevQuestions) => prevQuestions.concat(response.data));
        }
      })
      .finally(() => {
        setIsSearching(false);
      });
  }, [debouncedSearchTerm, page]);

  useEffect(() => {
    if (isSerachPage) {
      setSearchParams({ filter: searchTerm });
    }
    if (inputRef.current && isSerachPage && searchTerm === '') {
      inputRef.current.focus();
    }
  }, [isSerachPage, searchTerm, setSearchParams]);

  return (
    <>
      <QuestionListHeader>
        <Title>{isSerachPage ? 'Search Results' : 'Questions List'}:</Title>
        <HeaderText>
          Choose the question to vote on or use the search field to find the
          question
        </HeaderText>
        <StyledTextField
          value={searchTerm || ''}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your search here"
          maxLength={70}
          ref={inputRef}
        />
      </QuestionListHeader>
      <Container>
        {isSerachPage && (
          <div>
            <Button
              color="secondary"
              iconStart={<AiOutlineArrowLeft />}
              onClick={backToList}
            >
              Back to List
            </Button>
            <SearchResultDescription>
              <p>{`Search results for "${searchTerm.trim()}"`} </p>
              <Button color="primary" iconEnd={<AiOutlineShareAlt />}>
                Share
              </Button>
            </SearchResultDescription>
          </div>
        )}

        {questions.map(({ id, question }, i) => {
          return (
            <Link to={`/questions/${id}`} key={i}>
              <Card hoverEffect>
                <QuestionItemTitle>
                  <span className="text">{question}</span>
                  <span className="icon">
                    <AiOutlineArrowRight />
                  </span>
                </QuestionItemTitle>
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
