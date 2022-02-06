import axios, { AxiosResponse } from 'axios';

const API = process.env.REACT_APP_API;

type Choice = {
  choice: string;
  votes: number;
};

export type Question = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: Date;
  choices: Choice[];
};

export type GetQuestionsParams = {
  page?: number;
  filter?: string;
};

export const getQuestions = async ({
  page = 0,
  filter,
}: GetQuestionsParams): Promise<AxiosResponse<Question[]>> => {
  return await axios.get<Question[]>(`${API}/questions`, {
    params: { limit: 10, offset: 10 * page, filter },
  });
};

export const getQuestion = async (id: number) => {
  try {
    return await axios.get<Question[]>(`${API}/questions/${id}`);
  } catch (err) {
    return { data: { status: err } };
  }
};
