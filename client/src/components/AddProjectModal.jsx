import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FaProjectDiagram } from 'react-icons/fa'
import { ADD_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function AddProjectModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Choose...')

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS })

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      })
    },
  })
  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '' || description === '' || status === 'Choose...') {
      return alert('Please fill in the all fields')
    }
    console.log(name, description, status)

    addProject(name, description, status)
    setName('')
    setDescription('')
    setStatus('Choose...')
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaProjectDiagram className="icon" />
          <div>Create Project</div>
        </div>
      </button>

      <div
        className="modal fade "
        id="addProjectModal"
        aria-labelledby="addProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModalLabel">
                Create New Project
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
                  <label className="form-label">Project Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description / Notes</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>new</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
