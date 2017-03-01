import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import todoApp from './reducers/index';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(todoApp, persistedState);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
