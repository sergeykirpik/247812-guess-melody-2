import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenreScreen from './guess-genre-screen';

import questions from '../../mocks/questions';

const createNodeMock = (el) => {
  if (el.type === `audio`) {
    return {
      src: ``,
    };
  }
  return null;
};

it(`renders correctly`, () => {
  const question = questions[0];
  const tree = renderer
    .create(<GuessGenreScreen
      genre={question.genre}
      answers={question.answers} />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
