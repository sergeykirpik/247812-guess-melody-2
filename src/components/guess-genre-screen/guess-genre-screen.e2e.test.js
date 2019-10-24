import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessGenreScreen from "./guess-genre-screen";

import questions from "../../mocks/questions";

configure({adapter: new Adapter()});

it(`receives correct parameters onAnswer`, () => {
  const question = questions[0];
  const handleAnswer = jest.fn();
  const wrapper = shallow(
      <GuessGenreScreen
        genre={question.genre}
        answers={question.answers}
        onAnswer={handleAnswer} />
  );

  wrapper.find(`.game__input`).at(1).simulate(`change`);
  wrapper.find(`.game__input`).at(2).simulate(`change`);
  wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}});

  expect(handleAnswer).toHaveBeenCalledTimes(1);
  expect(handleAnswer).toHaveBeenCalledWith([false, true, true, false]);
});
