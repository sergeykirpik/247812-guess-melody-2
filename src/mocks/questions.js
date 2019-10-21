export const QuestionType = {
  GENRE: `genre`,
  ARTIST: `artist`,
};

export const gameSettings = {
  maxErrors: 3,
  maxTime: 5,
};

const questions = [
  {
    id: 1,
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      }, {
        genre: `pop`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      }, {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      }, {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      }
    ]
  }, {
    id: 2,
    type: QuestionType.ARTIST,
    artist: `Пелагея`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    answers: [
      {
        artist: `Пелагея`,
        picture: `http://placehold.it/134x134`,
      }, {
        artist: `Краснознаменная дивизия имени моей бабушки`,
        picture: `http://placehold.it/134x134`,
      }, {
        artist: `Lorde`,
        picture: `http://placehold.it/134x134`,
      }
    ]
  }
];

export default questions;
