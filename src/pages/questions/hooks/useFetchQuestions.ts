import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { getQuestions } from 'api/questions/service';
import { Question } from 'api/questions/types';

import { useDebounce } from 'helpers/hooks/useDebounce';

export const useFetchQuestions = () => {
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
      setIsSearching(true);
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
    setIsSearching(true);
    if (isSerachPage) {
      setSearchParams({ filter: searchTerm });
    }
    if (inputRef.current && isSerachPage && searchTerm === '') {
      inputRef.current.focus();
    }
  }, [isSerachPage, searchTerm, setSearchParams]);

  return {
    isSerachPage,
    searchTerm,
    setSearchTerm,
    inputRef,
    backToList,
    questions,
    isSearching,
    page,
    fetchQuestions,
  };
};
