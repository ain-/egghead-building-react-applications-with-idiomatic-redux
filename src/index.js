import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import todoApp from './reducers/index';

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false
  }]
};

const store = createStore(todoApp, persistedState);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
