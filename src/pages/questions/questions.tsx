import { FC, useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlineShareAlt } from 'react-icons/ai';

import { Button } from 'components/button';
import { QuestionList } from 'components/question-list';
import { QuestionListHeader } from 'components/question-list-header';
import { ShareContext } from 'components/share/context/shareContext';

import { useFetchQuestions } from './hooks/useFetchQuestions';
import {
  Container,
  StyledTextField,
  SearchResultDescription,
  LoadMore,
} from './questions.styled';

export const Questions: FC = () => {
  const {
    isSerachPage,
    searchTerm,
    setSearchTerm,
    inputRef,
    backToList,
    questions,
    isSearching,
    page,
    fetchQuestions,
  } = useFetchQuestions();

  const { setShareData } = useContext(ShareContext);

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
              <p>{`Search results for "${searchTerm?.trim()}"`} </p>
              <Button
                color="primary"
                iconEnd={<AiOutlineShareAlt />}
                onClick={() =>
                  setShareData({ show: true, url: window.location.href })
                }
              >
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
