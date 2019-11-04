import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

configure({adapter: new Adapter()});

it(`sets isPlaying state correctly`, () => {

  const wrapper = mount(
      <AudioPlayer
        src="some_song_url" />
  );

  wrapper.find(`button`).simulate(`click`);
  // expect(wrapper.state(`isPlaying`)).toBe(true);

  wrapper.find(`button`).simulate(`click`);
  expect(wrapper.state(`isPlaying`)).toBe(false);
});
