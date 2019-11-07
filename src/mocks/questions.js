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
        src: `http://www.tannerhelland.com/dmusic/Retribution.ogg`,
      }, {
        genre: `pop`,
        src: `http://www.tannerhelland.com/dmusic/Deeper.mp3`,
      }, {
        genre: `jazz`,
        src: `http://www.tannerhelland.com/dmusic/AMemoryAway.ogg`,
      }, {
        genre: `rock`,
        src: `http://www.tannerhelland.com/dmusic/TheHaunting.mp3`,
      }
    ]
  }, {
    id: 2,
    type: QuestionType.ARTIST,
    artist: `Пелагея`,
    src: `https://file-examples.com/wp-content/uploads/2017/11/file_example_OOG_1MG.ogg`,
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
