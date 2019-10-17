import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

it(`runs game on start button click`, () => {
  const handleStart = jest.fn();
  const wrapper = shallow(
      <WelcomeScreen
        errorCount={0}
        time={0}
        onStart={handleStart} />
  );

  wrapper.find(`.welcome__button`).simulate(`click`);

  expect(handleStart).toHaveBeenCalledTimes(1);
});
