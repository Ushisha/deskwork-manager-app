import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

export default function TaskCard({ task }) {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body d-flex justify-content-between">
          <div className="d-flex justify-content-evenly align-items-center">
            <button className="btn">
              <RiCheckboxBlankCircleLine className="icon" />
            </button>

            <p className="card-text">{task.todo}</p>
          </div>

          <a className="btn btn-light" href={`/tasks/${task.id}`}>
            view
          </a>
        </div>
      </div>
    </>
  )
}
