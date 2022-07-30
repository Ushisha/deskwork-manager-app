import { GET_TASKS } from '../queries/taskQueries'

import TodoCard from './TodoCard'
import { useQuery } from '@apollo/client'
import Spinner from './Spinner'

export default function TodoList({ projectId }) {
  const { loading, error, data } = useQuery(GET_TASKS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    !loading &&
    !error && (
      <ul className="list-group mt-2">
        {data.tasks
          .filter((task) => task.project.id === projectId)
          .map((task) => (
            <TodoCard key={task.id} task={task} projectId={projectId} />
          ))}
      </ul>
    )
  )
}
