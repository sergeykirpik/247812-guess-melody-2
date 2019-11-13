import questions from './mocks/questions';

const START_GAME = `START_GAME`;
const INCREMENT_MISTAKES = `INCREMENT_MISTAKES`;
const NEXT_QUESTION = `NEXT_QUESTION`;

const initialState = {
  questions,
  mistakes: 0,
  questionIdx: -1,
};



export const ActionCreators = {
  startGame: () => {
    return {
      type: START_GAME,
    };
  },
  incrementMistakes: () => {
    return {
      type: INCREMENT_MISTAKES,
    };
  },
  nextQuestion: () => {
    return {
      type: NEXT_QUESTION,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case START_GAME:
      return {
        mistakes: 0,
        questionIdx: 0,
        questions
      };

    case INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + 1,
      });

    case NEXT_QUESTION:
      let questionIdx = state.questionIdx + 1;
      if (questionIdx >= state.questions.length) {
        questionIdx = -1;
      }
      return Object.assign({}, state, {
        questionIdx,
      });

    default:
      return state;

  }
};

export default reducer;
