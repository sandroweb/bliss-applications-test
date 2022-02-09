import axios, { AxiosResponse } from 'axios';

import { updateVoteBody } from './mapper';
import { GetQuestionsParams, Question, SaveVotePayload } from './types';

const API = process.env.REACT_APP_API;

export const getQuestions = async ({
  page = 0,
  filter,
}: GetQuestionsParams): Promise<AxiosResponse<Question[]>> => {
  return await axios.get<Question[]>(`${API}/questions`, {
    params: { limit: 10, offset: 10 * page, filter },
  });
};

export const getQuestion = async (
  id: number
): Promise<AxiosResponse<Question>> => {
  return await axios.get<Question>(`${API}/questions/${id}`);
};

export const updateVote = async (
  question: Question,
  vote: string
): Promise<AxiosResponse<Question>> => {
  const body: SaveVotePayload = updateVoteBody(question, vote);
  return await axios.put<Question>(`${API}/questions/${question.id}`, { body });
};
