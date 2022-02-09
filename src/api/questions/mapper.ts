import { Question, SaveVotePayload } from './types';

export const updateVoteBody = (
  questionObject: Question,
  vote: string
): SaveVotePayload => {
  const { id, question, image_url, thumb_url, choices } = questionObject;
  return {
    id,
    question,
    image_url,
    thumb_url,
    choices: choices.map(({ choice, votes }) => {
      return {
        choice,
        votes: choice === vote ? votes + 1 : votes,
      };
    }),
  };
};
