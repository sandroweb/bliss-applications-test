import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineShareAlt } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { getQuestions } from 'api/questions/service';
import { Question } from 'api/questions/types';

import { Button } from 'components/button';
import { QuestionList } from 'components/question-list';
import { QuestionListHeader } from 'components/question-list-header';

import { useDebounce } from 'helpers/useDebounce';

import {
  Container,
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

  const fetchQuestions = useCallback(
    (currentPage = 0) => {
      setPage(currentPage);
      getQuestions({ page: currentPage, filter: debouncedSearchTerm })
        .then((response) => {
          if (currentPage === 0) {
            setQuestions(response.data);
          } else {
            setQuestions((prevQuestions) =>
              prevQuestions.concat(response.data)
            );
          }
        })
        .finally(() => {
          setIsSearching(false);
        });
    },
    [debouncedSearchTerm]
  );

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

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
      <QuestionListHeader
        title={isSerachPage ? 'Search Results' : 'Questions List'}
        subTitle="Choose the question to vote on or use the search field to find the
        question"
      >
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
        <QuestionList questions={questions} />
        {!!questions.length && (
          <LoadMore>
            <Button
              color="primary"
              disabled={isSearching}
              onClick={() => {
                fetchQuestions(page + 1);
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
