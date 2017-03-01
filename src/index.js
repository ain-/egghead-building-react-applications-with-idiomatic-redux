import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import {todos} from './reducers/todosReducer';
import {visibilityFilter} from './reducers/visibilityFilterReducer';


const todoApp = combineReducers({todos, visibilityFilter});
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
