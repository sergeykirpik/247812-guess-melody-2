import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App gameTime={15} errorCount={2} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
