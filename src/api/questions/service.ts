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

export const getAllQuestions = async (): Promise<AxiosResponse<Question[]>> => {
  return await axios.get<Question[]>(`${API}/questions`);
};

export const getQuestion = async (id: number) => {
  try {
    return await axios.get<Question[]>(`${API}/questions/${id}`);
  } catch (err) {
    return { data: { status: err } };
  }
};
