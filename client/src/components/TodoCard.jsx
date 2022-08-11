import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { GET_TASK } from '../queries/taskQueries'
import { UPDATE_TASK } from '../mutations/taskMutations'
import { GET_TASKS } from '../queries/taskQueries'
import { DELETE_TASK } from '../mutations/taskMutations'
import { TiDelete } from 'react-icons/ti'

export default function TodoCard({ task }) {
  const id = task.id
  const todo = task.todo
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)

  const [updateTask] = useMutation(UPDATE_TASK, {
    variables: { id: task.id, todo, isCompleted },
    refetchQueries: { query: GET_TASK, variables: { id: task.id } },
  })
  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: { id: task.id },

    update(cache, { data: { deleteTask } }) {
      const { tasks } = cache.readQuery({ query: GET_TASKS })
      cache.writeQuery({
        query: GET_TASKS,
        data: {
          tasks: tasks.filter((task) => task.id !== deleteTask.id),
        },
      })
    },
  })

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    updateTask(id, todo, isCompleted)
  }, [isCompleted])

  return (
    <>
      <li
        key={task.id}
        className="card todo-card mb-1 d-flex flex-row align-items-center p-2"
        id="todoList"
      >
        <div className="mx-2">
          <input
            id={task.id}
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleCheckboxChange(e)}
            className="task"
          />
          <label className="todo-label mx-2" htmlFor={task.id}>
            {task.todo}
          </label>
        </div>
        <div className="ms-auto">
          <div className="d-flex align-items-center ms-auto">
            <button className="delete-btn" onClick={deleteTask}>
              <TiDelete className="delete-icon" />
            </button>
          </div>
        </div>
      </li>
    </>
  )
}
