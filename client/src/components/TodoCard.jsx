import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_TASK } from '../queries/taskQueries'
import { UPDATE_TASK } from '../mutations/taskMutations'
import DeleteTaskBtn from './DeleteTaskBtn'
import { useEffect } from 'react'

export default function TodoCard({ task, provided, snapshot }) {
  const id = task.id
  const todo = task.todo
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)

  const [updateTask] = useMutation(UPDATE_TASK, {
    variables: { id: task.id, todo, isCompleted },
    refetchQueries: { query: GET_TASK, variables: { id: task.id } },
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
      {/* <div className="card mb-2 todo-card" key={task.id}>
        <div className="card-body p-2 d-flex align-items-center">
          {task.todo}
          <DeleteTaskBtn task={task} />
        </div>
      </div> */}

      <li
        key={task.id}
        className={`card todo-card mb-1 d-flex flex-row align-items-center p-2 ${
          snapshot.isDragging ? 'selected' : 'not-selected'
        }`}
        id="todoList"
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
      >
        {/* <a href={`#${task.id}`}> */}
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
          <DeleteTaskBtn task={task} />
        </div>
        {/* </a> */}
      </li>

      {/* <div class="target" id={task.id} role="tabpanel">
        {task.todo}
      </div> */}
    </>
  )
}
