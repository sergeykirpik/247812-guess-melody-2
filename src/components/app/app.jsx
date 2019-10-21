import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtistScreen from "../guess-artist-screen/guess-artist-screen.jsx";
import questions from "../../mocks/questions";

const App = (props) => {
  const {gameTime, errorCount} = props;
  const {src, answers} = questions[1];

  return (
    // <WelcomeScreen
    //   time={gameTime}
    //   errorCount={errorCount}
    // />
    <GuessArtistScreen
      songSrc={src}
      answers={answers}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
