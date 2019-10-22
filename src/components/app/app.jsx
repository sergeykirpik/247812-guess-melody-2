import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtistScreen from "../guess-artist-screen/guess-artist-screen.jsx";
import questions from "../../mocks/questions";
import GuessGenreScreen from "../guess-genre-screen/guess-genre-screen.jsx";

const Screen = {
  WELCOME: `welcome`,
  GUESS_ARTIST: `guess-artist`,
  GUESS_GENRE: `guess-genre`,
};

const screens = {
  [Screen.WELCOME]: get = () => <WelcomeScreen />,
  [Screen.GUESS_ARTIST]: get = (props) => <GuessArtistScreen {...props} />,
  [Screen.GUESS_GENRE]: get = (props) => <GuessGenreScreen {...props} />
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      screen: Screen.WELCOME,
    }
  }

  const {gameTime, errorCount} = props;
  const {src, answers} = questions[1];

  return (
    // <WelcomeScreen
    //   time={gameTime}
    //   errorCount={errorCount}
    // />

    // <GuessArtistScreen
    //   songSrc={src}
    //   answers={answers}
    // />

    <GuessGenreScreen
      genre={questions[0].genre}
      answers={questions[0].answers}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
