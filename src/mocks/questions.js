import {QuestionType} from '../constants';

export const gameSettings = {
  maxErrors: 5,
  maxTime: 10,
};

const questions = [
  {
    id: 1,
    type: QuestionType.GENRE,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg`,
      }, {
        genre: `pop`,
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg`,
      }, {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg`,
      }, {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg`,
      }
    ]
  }, {
    id: 2,
    type: QuestionType.ARTIST,
    artist: `Пелагея`,
    src: `https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg`,
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
