import {schema } from 'normalizr';

console.log(schema);
console.log(schema);

export const todo = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todo);
