import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessArtistScreen from "./guess-artist-screen";

import questions from "../../mocks/questions";

configure({adapter: new Adapter()});

it(`receives correct parameters onAnswer`, () => {
  const question = questions[1];
  const handleAnswer = jest.fn();
  const wrapper = shallow(
      <GuessArtistScreen
        songSrc={question.src}
        answers={question.answers}
        onAnswer={handleAnswer} />
  );

  wrapper.find(`.artist__input`).first().simulate(`change`);

  expect(handleAnswer).toHaveBeenCalledTimes(1);
  expect(handleAnswer).toHaveBeenCalledWith(question.answers[0].artist);
});
