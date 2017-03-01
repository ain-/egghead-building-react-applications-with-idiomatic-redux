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

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
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
