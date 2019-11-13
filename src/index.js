import {createStore} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import questions, {gameSettings} from './mocks/questions';
import reducer from './reducer.js';

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App
        settings={gameSettings}
      />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
