import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FaList } from 'react-icons/fa'
import { ADD_TASK } from '../mutations/taskMutations'
import { GET_TASKS } from '../queries/taskQueries'

export default function AddProjectTaskModal({ projectId }) {
  //get task values from form
  const [todo, setTodo] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

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
  // const { loading, error, data } = useQuery(GET_PROJECTS)

  // if (loading) return null
  // if (error) return 'Somthing went wrong...'

  const onSubmit = (e) => {
    e.preventDefault()

    if (todo === '') {
      return alert('Please fill in the all fields')
    }

    addTask(todo, isCompleted, projectId)
    setTodo('')
    // setProjectId('')
    setIsCompleted(false)
  }
  return (
    <>
      {/* {!loading && !error && ( */}
      <>
        <button
          type="button"
          className="btn btn-primary"
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
                      className="form-control"
                      id="name"
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                  </div>

                  {/* <div className="col-md-4 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div> */}
                  {/* <div className="mb-3">
                      <label className="form-label">Project</label>
                      <select
                        value={projectId}
                        id="projectId"
                        className="form-select"
                        onChange={(e) => setProjectId(e.target.value)}
                      >
                        <option value="">Select Project</option>
                        {data.projects.map((project) => (
                          <option key={project.id} value={project.id}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                    </div> */}
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
