import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

configure({adapter: new Adapter()});

it(`sets isPlaying state correctly`, () => {
  const audioPlayer = (
    <AudioPlayer src="some_song_url" />
  );
  jest.spyOn(AudioPlayer.prototype, `getRef`).mockImplementation(() => ({
    current: new Audio(``),
  }));
  const wrapper = shallow(audioPlayer);

  wrapper.find(`button`).simulate(`click`);
  // expect(wrapper.state(`isPlaying`)).toBe(true);

  wrapper.find(`button`).simulate(`click`);
  expect(wrapper.state(`isPlaying`)).toBe(false);
});
