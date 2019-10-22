import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenreScreen from './guess-genre-screen';

import questions from '../../mocks/questions';

it(`renders correctly`, () => {
  const question = questions[0];
  const tree = renderer
    .create(<GuessGenreScreen
      genre={question.genre}
      answers={question.answers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
