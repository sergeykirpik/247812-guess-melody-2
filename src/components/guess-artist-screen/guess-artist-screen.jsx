import React from 'react';
import PropTypes from 'prop-types';

const GuessArtistScreen = (props) => {
  const {
    songSrc,
    answers,
    onAnswer,
  } = props;
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={songSrc}></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map(({artist, picture}, idx) => (
            <div className="artist" key={idx}>
              <input className="artist__input visually-hidden" type="radio" name="answer" value={artist} id={`answer-${idx}`} onChange={() => onAnswer(artist)}/>
              <label className="artist__name" htmlFor={`answer-${idx}`}>
                <img className="artist__picture" src={picture} alt={artist} />
                {artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

GuessArtistScreen.propTypes = {
  songSrc: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        artist: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAnswer: PropTypes.func,
};

export default GuessArtistScreen;
