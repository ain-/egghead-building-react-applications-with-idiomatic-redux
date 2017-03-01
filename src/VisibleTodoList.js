import React from 'react';
import Todo from './Todo';
import {toggleTodo} from './actionCreators';
import {connect} from 'react-redux';

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
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return undefined;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  )
});
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) =>
    dispatch(toggleTodo(id))
});
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default VisibleTodoList;
