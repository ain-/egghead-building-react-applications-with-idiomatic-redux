import React from 'react';
import Todo from './Todo';
import {toggleTodo} from './actionCreators';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

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

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return undefined;
  }
};

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter ||'all'
  )
});
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) =>
    dispatch(toggleTodo(id))
});
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));
export default VisibleTodoList;
