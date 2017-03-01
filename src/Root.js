import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
