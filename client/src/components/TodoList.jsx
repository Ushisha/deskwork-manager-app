import { GET_TASKS } from '../queries/taskQueries'
import Tasks from './Tasks'
import { useQuery } from '@apollo/client'
import Spinner from './Spinner'

export default function TodoList({ projectId }) {
  //get all tasks
  const { loading, error, data } = useQuery(GET_TASKS, {
    nextFetchPolicy: 'cache-only',
  })

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>
  //filter through only tasks related to this project
  const projectTodos = data.tasks.filter(
    (task) => task.project.id === projectId
  )

  return <>{!loading && !error && <Tasks tasks={projectTodos} />}</>
}
