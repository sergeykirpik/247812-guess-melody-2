import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen time={7} errorCount={8} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
