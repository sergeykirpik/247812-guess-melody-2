import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GuessGenreScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      answers: this.props.answers.map(() => false),
      activePlayer: -1,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  render() {
    const {genre, answers} = this.props;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
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
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this._handleSubmit}>

            {answers.map((it, idx) => (
              <div key={idx} className="track" >
                <AudioPlayer
                  src={it.src}
                  isPlaying={idx === this.state.activePlayer}
                  onPlayButtonClick={() => this._handlePlayButtonClick(idx)}
                />
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={genre} id={`answer-${idx}`} onChange={() => this._handleChange(idx)} checked={this.state.answers[idx]}/>
                  <label className="game__check" htmlFor={`answer-${idx}`}>Отметить</label>
                </div>
              </div>
            ))}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }

  _handlePlayButtonClick(idx) {
    this.setState(({activePlayer}) => ({
      activePlayer: activePlayer === idx ? -1 : idx,
    }));
  }

  _handleChange(currentIdx) {
    this.setState(({answers}) => ({
      answers: answers.map((it, idx) => idx === currentIdx ? !it : it)
    }));
  }

  _handleSubmit(e) {
    const {onAnswer} = this.props;
    e.preventDefault();
    onAnswer(this.state.answers);
  }

}

GuessGenreScreen.defaultProps = {
  onAnswer: () => {},
};

GuessGenreScreen.propTypes = {
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAnswer: PropTypes.func
};

export default GuessGenreScreen;
