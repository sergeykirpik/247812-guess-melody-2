import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtistScreen from "../guess-artist-screen/guess-artist-screen.jsx";
import GuessGenreScreen from "../guess-genre-screen/guess-genre-screen.jsx";

import {QuestionType} from "../../constants";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      questionIdx: -1,
    };

    this._handleGameStart = this._handleGameStart.bind(this);
    this._handleAnswer = this._handleAnswer.bind(this);
  }

  _handleGameStart() {
    this.setState({
      questionIdx: 0,
    });
  }

  _handleAnswer() {
    const {questions} = this.props;
    this.setState(({questionIdx}) => ({
      questionIdx: questionIdx + 1 < questions.length ? questionIdx + 1 : -1,
    }));
  }

  render() {
    return this._getScreen();
  }

  _getScreen() {
    const {questionIdx} = this.state;
    const {questions} = this.props;
    if (questionIdx === -1) {
      return this._welcomeScreen;
    }
    if (questionIdx >= questions.length) {
      throw new Error(`There is no question with index: ${questionIdx}`);
    }
    const {type} = questions[questionIdx];
    if (type === QuestionType.GENRE) {
      return this._guessGenreScreen;
    }
    if (type === QuestionType.ARTIST) {
      return this._guessArtistScreen;
    }

    throw new Error(`Cannot determine legal screen`);
  }

  get _welcomeScreen() {
    const {maxErrors, maxTime} = this.props.settings;

    return <WelcomeScreen
      time={maxTime}
      errorCount={maxErrors}
      onStart={this._handleGameStart}
    />;
  }

  get _guessArtistScreen() {
    const {questionIdx} = this.state;
    const {questions} = this.props;
    const {src, answers} = questions[questionIdx];

    return <GuessArtistScreen
      songSrc={src}
      answers={answers}
      onAnswer={this._handleAnswer}
    />;
  }

  get _guessGenreScreen() {
    const {questionIdx} = this.state;
    const {questions} = this.props;
    const {genre, answers} = questions[questionIdx];

    return <GuessGenreScreen
      genre={genre}
      answers={answers}
      onAnswer={this._handleAnswer}
    />;
  }

}

const artistAnswerType = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}).isRequired;

const genreAnswerType = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}).isRequired;

App.propTypes = {
  settings: PropTypes.shape({
    maxErrors: PropTypes.number.isRequired,
    maxTime: PropTypes.number.isRequired,
  }).isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.oneOf([QuestionType.ARTIST]).isRequired,
          artist: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          answers: PropTypes.arrayOf(artistAnswerType).isRequired,
        }).isRequired,
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.oneOf([QuestionType.GENRE]).isRequired,
          genre: PropTypes.string.isRequired,
          answers: PropTypes.arrayOf(genreAnswerType).isRequired,
        }).isRequired
      ]).isRequired
  ).isRequired
};

export default App;
