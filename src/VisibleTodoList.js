import React from 'react';
import Todo from './Todo';
import {toggleTodo} from './actionCreators';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from './reducers';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state,
    params.filter ||'all'
  )
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));
export default VisibleTodoList;
