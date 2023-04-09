import { Todo, Property } from '@/models/Todo'
import { v4 } from 'uuid'

export const defaultProperty: Property = {
  value: '',
}

export const initialTodo: Todo = {
  id: '',
  title: '',
  description: '',
  statusId: 1,
  properties: [defaultProperty],
}

export const defaultListTodo: Todo[] = [
  {
    id: v4(),
    title: 'Learn Nodejs',
    description: 'coding API todo list',
    statusId: 1,
    properties: [
      { value: 'Learn Express' },
      { value: 'Learn MongoDB + Mongoose' },
    ],
  },
  {
    id: v4(),
    title: 'Learn Nodejs 2',
    description: 'coding API todo list',
    statusId: 2,
    properties: [{ value: 'Learn Docker + CI/CD' }],
  },
  {
    id: v4(),
    title: 'Learn Nodejs 3',
    description: 'coding API todo list',
    statusId: 3,
    properties: [{ value: 'Learn Config source base' }],
  },
  {
    id: v4(),
    title: 'Learn Nodejs 4',
    description: 'coding API todo list',
    statusId: 4,

    properties: [{ value: 'Learn Config source base' }],
  },
  {
    id: v4(),
    title: 'Learn Nodejs 5',
    description: 'coding API todo list',
    statusId: 3,
    properties: [{ value: 'Learn Docker + CI/CD' }],
  },
  {
    id: v4(),
    title: 'Learn Nodejs 6',
    description: 'coding API todo list',
    statusId: 2,
    properties: [{ value: 'Learn Docker + CI/CD' }],
  },
]
