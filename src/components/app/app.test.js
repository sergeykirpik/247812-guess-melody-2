import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import questions, {gameSettings} from '../../mocks/questions';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App
      settings={gameSettings}
      questions={questions} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
