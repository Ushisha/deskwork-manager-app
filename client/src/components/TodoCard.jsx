import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_TASK } from '../queries/taskQueries'
import { UPDATE_TASK } from '../mutations/taskMutations'
import DeleteTaskBtn from './DeleteTaskBtn'
export default function TodoCard({ task }) {
  // const [status, setStatus] = useState(task.status)

  // const [updateTask] = useMutation(UPDATE_TASK, {
  //   variables: { id: task.id, todo: task.todo, status },
  //   refetchQueries: { query: GET_TASK, variables: { id: task.id } },
  // })

  // const handleChange = (e) => {
  //   if (e.target.checked) {
  //     setStatus('completed')
  //   } else {
  //     setStatus('new')
  //   }
  //   updateTask(status)
  // }
  return (
    <>
      <div class="card mb-2 todo-card" key={task.id}>
        <div class="card-body p-2 d-flex align-items-center">
          {task.todo}
          <DeleteTaskBtn task={task} />
        </div>
      </div>
      {/* <li className="list-group-item">
        <input
          className="form-check-input me-1 task"
          type="checkbox"
          onChange={handleChange}
          value=""
          id={task.id}
        />
        <label className="form-check-label" htmlFor={task.id}>
         
        </label>
      </li> */}
    </>
  )
}
