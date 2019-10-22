import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtistScreen from './guess-artist-screen';

import questions from '../../mocks/questions';

it(`renders correctly`, () => {
  const question = questions[1];
  const tree = renderer
    .create(<GuessArtistScreen
      songSrc={question.src}
      answers={question.answers} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
