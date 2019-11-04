import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

const createNodeMock = (el) => {
  if (el.type === `audio`) {
    return {
      src: ``,
    };
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer
      src="some_audio_file"
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
