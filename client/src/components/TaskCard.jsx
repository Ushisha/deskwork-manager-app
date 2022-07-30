export default function TaskCard({ task }) {
  return (
    <>
      <div classname="input-group-text">
        <input
          classname="form-check-input mt-0"
          type="checkbox"
          value=""
          aria-label={task.todo}
        />
        <p className="card-text">{task.todo}</p>
      </div>
    </>
  )
}
