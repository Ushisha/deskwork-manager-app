import { GET_TASKS } from '../queries/taskQueries'

import TodoCard from './TodoCard'
import { useQuery } from '@apollo/client'
import Spinner from './Spinner'

export default function TodoList({ projectId }) {
  const { loading, error, data } = useQuery(GET_TASKS)

  // const todos = data.tasks.filter((task) => task.clientId === clientId)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    !loading &&
    !error && (
      <div className="container">
        <ul className="list-group mt-2">
          {data.tasks
            .filter((task) => task.project.id === projectId)
            .map((task) => (
              <TodoCard task={task} projectId={projectId} />
            ))}
        </ul>
      </div>
    )
  )
}
