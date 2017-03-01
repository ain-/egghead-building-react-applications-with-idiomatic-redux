import {todos} from './todosReducer';
import {visibilityFilter} from './visibilityFilterReducer';
import {combineReducers} from 'redux';

const todoApp = combineReducers({todos, visibilityFilter});

export default todoApp;
