import React from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtistScreen from "../guess-artist-screen/guess-artist-screen.jsx";
import GuessGenreScreen from "../guess-genre-screen/guess-genre-screen.jsx";

import {QuestionType} from "../../constants";
import {ActionCreators} from "../../reducer.js";

import {connect} from 'react-redux';

const handleGameStart = (dispatch) => () => {
  dispatch(ActionCreators.startGame());
};

const handleAnswer = (dispatch) => (answer) => {
  dispatch(ActionCreators.nextQuestion(answer));
};

const getWelcomeScreen = (props) => {
  const {maxErrors, maxTime} = props.settings;

  return <WelcomeScreen
    time={maxTime}
    errorCount={maxErrors}
    onStart={handleGameStart(props.dispatch)}
  />;
};

const getGuessArtistScreen = (props) => {
  const {questions, questionIdx, dispatch} = props;
  const {src, answers} = questions[questionIdx];

  return <GuessArtistScreen
    songSrc={src}
    answers={answers}
    onAnswer={handleAnswer(dispatch)}
  />;
};

const getGuessGenreScreen = (props) => {
  const {questions, questionIdx, dispatch} = props;
  const {genre, answers} = questions[questionIdx];

  return <GuessGenreScreen
    genre={genre}
    answers={answers}
    onAnswer={handleAnswer(dispatch)}
  />;
};

const getScreen = (props) => {
  const {questionIdx, questions} = props;
  if (questionIdx === -1) {
    return getWelcomeScreen(props);
  }
  if (questionIdx >= questions.length) {
    throw new Error(`There is no question with index: ${questionIdx}`);
  }
  const {type} = questions[questionIdx];
  if (type === QuestionType.GENRE) {
    return getGuessGenreScreen(props);
  }
  if (type === QuestionType.ARTIST) {
    return getGuessArtistScreen(props);
  }

  throw new Error(`Cannot determine legal screen`);
};


const App = (props) => {
  return getScreen(props);
};

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

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    questionIdx: state.questionIdx,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps)(App);
export {App};
