import { FC, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getAllQuestions, Question } from 'api/questions/service';

import { StyledContainer } from './questions.styled';

export const Questions: FC = () => {
  const [questions, setQuestions] = useState<Question[]>();

  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchValue, setSearchValue] = useState(
    searchParams.get('filter') || ''
  );

  useEffect(() => {
    getAllQuestions()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch(() => {
        setQuestions([]);
      });
  }, []);

  useEffect(() => {
    let timeoutSearch: NodeJS.Timeout;
    timeoutSearch = setTimeout(() => {
      setSearchParams({ filter: searchValue });
    }, 400);
    return () => {
      if (timeoutSearch) {
        clearTimeout(timeoutSearch);
      }
    };
  }, [searchValue, setSearchParams]);

  return (
    <StyledContainer>
      <h1>Total:{questions?.length}</h1>:<h1>Questions:</h1>:
      <div>
        <input
          type="text"
          name="s"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>
        {questions?.map(({ id, question, choices }, i) => (
          <Link to={`/questions/${id}`} key={i}>
            <h3>{question}</h3>
            <div>
              {choices.map(({ votes, choice }, x) => (
                <div key={x}>
                  <div>
                    {votes} - {choice}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </StyledContainer>
  );
};
