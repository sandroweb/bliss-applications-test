import { updateVoteBody } from './mapper';

describe('Questions Mapper', () => {
  test('Update Vote Body', () => {
    expect(
      updateVoteBody(
        {
          id: 1,
          image_url: 'some image_url',
          thumb_url: 'some thumb_url',
          question: 'some question',
          published_at: 'some string',
          choices: [
            { choice: 'choice 1', votes: 0 },
            { choice: 'choice 2', votes: 0 },
            { choice: 'choice 3', votes: 0 },
          ],
        },
        'choice 2'
      )
    ).toEqual({
      id: 1,
      image_url: 'some image_url',
      thumb_url: 'some thumb_url',
      question: 'some question',
      choices: [
        { choice: 'choice 1', votes: 0 },
        { choice: 'choice 2', votes: 1 },
        { choice: 'choice 3', votes: 0 },
      ],
    });
  });
});
