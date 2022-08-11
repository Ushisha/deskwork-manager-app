import TodoCard from './TodoCard'

export default function Tasks({ tasks }) {
  return (
    <>
      {tasks.length > 0 ? (
        <ul
          role="list"
          className="todo-list p-0"
          aria-labelledby="list-heading"
        >
          {tasks.map((task) => (
            <TodoCard key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>No Tasks</p>
      )}
    </>
  )
}
