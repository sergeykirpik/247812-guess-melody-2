import React from 'react';
import PropTypes from 'prop-types';

class GuessGenreScreen extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      answers: this.props.answers.map(() => false),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(currentIdx) {
    this.setState(({answers}) => ({
      answers: answers.map((it, idx) => idx === currentIdx ? !it : it)
    }));
  }

  handleSubmit(e) {
    const {onAnswer} = this.props;
    e.preventDefault();
    if (onAnswer) {
      onAnswer(this.state.answers);
    }
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
          <form className="game__tracks" onSubmit={this.handleSubmit}>

            {answers.map((it, idx) => (
              <div key={idx} className="track" >
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={it.src}></audio>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={genre} id={`answer-${idx}`} onChange={() => this.handleChange(idx)} checked={this.state.answers[idx]}/>
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
}

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
