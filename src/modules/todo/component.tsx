import { useState, useEffect } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Modal } from '@/components/Modal'
import { InitialColumn } from '@/factory/column'
import { defaultListTodo, initialTodo } from '@/factory/todo'
import { Todo } from '@/models/Todo'
import TodoColumnModel from '@/models/TodoColumn'
import { TodoForm } from '~/components/todo/TodoForm'
import { TodoItemWrapper, TodoWrapper } from './styles'
import { validate } from './validate'

export const Component = () => {
  const [columns, setColumns] = useState<TodoColumnModel[]>([])
  const [listTodo, setListTodo] = useState<Todo[]>([])
  const [todoItem, setTodoItem] = useState<Todo>(initialTodo)
  const [showPopupCreate, setShowPopupCreate] = useState<boolean>(false)
  const [showPopupUpdate, setShowPopupUpdate] = useState<boolean>(false)

  const onAddTodo = (values: Todo) => {
    setListTodo([...listTodo, values])
  }

  const onUpdateTodo = (values: Todo) => {
    const updatedTodos = listTodo.map((todo) =>
      todo.id === values.id ? values : todo
    )
    setListTodo(updatedTodos)
  }

  const onDeleteTodo = (id: string) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id))
  }

  const createPopup = () => {
    setShowPopupCreate(true)
  }

  const updatePopup = (todo: Todo) => {
    setShowPopupUpdate(true)
    setTodoItem(todo)
  }

  const closePopupCreate = () => {
    setShowPopupCreate(false)
  }

  const closePopupUpdate = (): void => {
    setShowPopupUpdate(false)
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result

    if (!destination) return

    const index = listTodo.findIndex((todo) => todo.id === draggableId)
    const updateTodo = {
      ...listTodo[index],
      statusId: +destination.droppableId,
    }
    listTodo.splice(index, 1)
    listTodo.splice(destination.index, 0, updateTodo)
  }

  useEffect(() => {
    setColumns(InitialColumn)
    setListTodo(defaultListTodo)
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TodoWrapper>
        <div className="flex justify-between m-4">
          <h1>Todo List</h1>
          <Button onClick={createPopup}>Add todo</Button>
        </div>
        <div className="flex h-full gap-[20px] p-5">
          {columns.map((column) => (
            <div
              key={column.value}
              className="w-[25%] min-h-screen flex flex-col rounded-2xl bg-white"
            >
              <h3 className="p-6 text-lg text-center text-[#4d1894]">
                {column.label}
              </h3>
              <Droppable droppableId={column.value.toString()} type="list">
                {(provided) => (
                  <TodoItemWrapper
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {listTodo
                      .filter((todo) => todo.statusId === column.value)
                      .map((todo, index) => (
                        <Draggable
                          key={todo.id}
                          draggableId={todo.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className=""
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card onClick={() => updatePopup(todo)}>
                                <h3>{todo.title}</h3>
                                <h3>{todo.description}</h3>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </TodoItemWrapper>
                )}
              </Droppable>
            </div>
          ))}
        </div>

        <Modal show={showPopupUpdate} header="Todo" onClose={closePopupUpdate}>
          <TodoForm
            status="update"
            onClose={closePopupUpdate}
            value={todoItem}
            addTodo={onAddTodo}
            updateTodo={onUpdateTodo}
            deleteTodo={onDeleteTodo}
            validate={validate}
          />
        </Modal>

        <Modal
          show={showPopupCreate}
          header="Add Todo"
          onClose={closePopupCreate}
        >
          <TodoForm
            status="create"
            onClose={closePopupCreate}
            value={initialTodo}
            addTodo={onAddTodo}
            validate={validate}
          />
        </Modal>
      </TodoWrapper>
    </DragDropContext>
  )
}
