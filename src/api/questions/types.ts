type Choice = {
  choice: string;
  votes: number;
};

export type Question = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: Choice[];
};

export type GetQuestionsParams = {
  page?: number;
  filter?: string;
};

export type SaveVotePayload = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  choices: Choice[];
};
