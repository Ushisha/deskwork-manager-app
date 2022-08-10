import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FaList } from 'react-icons/fa'
import { ADD_TASK } from '../mutations/taskMutations'
import { GET_TASKS } from '../queries/taskQueries'

export default function AddProjectTaskModal({ projectId }) {
  //get task values from form
  const [todo, setTodo] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  //get addTask function from mutation
  const [addTask] = useMutation(ADD_TASK, {
    variables: { todo, isCompleted, projectId },
    update(cache, { data: { addTask } }) {
      const { tasks } = cache.readQuery({ query: GET_TASKS })

      cache.writeQuery({
        query: GET_TASKS,
        data: { tasks: [...tasks, addTask] },
      })
    },
  })
  //get project for select
  //  const { loading, error, data } = useQuery(GET_PROJECTS)

  //   if (loading) return null
  //  if (error) return 'Somthing went wrong...'

  const onSubmit = (e) => {
    e.preventDefault()

    if (todo === '') {
      return alert('Please fill in the all fields')
    }

    addTask(todo, isCompleted, projectId)
    setTodo('')

    setIsCompleted(false)
  }
  return (
    <>
      {/* {!loading && !error && ( */}
      <>
        <button
          type="button"
          className="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#addProjectTaskModal"
        >
          <div className="d-flex align-items-center">
            <FaList className="icon" />
            <div>Add Task</div>
          </div>
        </button>

        <div
          className="modal fade "
          id="addProjectTaskModal"
          aria-labelledby="addProjectTaskModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen-md-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProjectTaskModalLabel">
                  Create New Task
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Task</label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      id="name"
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  )
}
