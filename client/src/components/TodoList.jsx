import { GET_TASKS } from '../queries/taskQueries'

import Tasks from './Tasks'
import { useQuery } from '@apollo/client'
import Spinner from './Spinner'

export default function TodoList({ projectId }) {
  const { loading, error, data } = useQuery(GET_TASKS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>
  const projectTodos = data.tasks.filter(
    (task) => task.project.id === projectId
  )

  return <>{!loading && !error && <Tasks data={projectTodos} />}</>
  // return (
  //   <>
  //     {!loading &&
  //       !error &&
  //       data.tasks
  //         .filter((task) => task.project.id === projectId)
  //         .map((task) => (
  //           <TodoCard key={task.id} task={task} projectId={projectId} />
  //         ))}
  //   </>
  // )
}
