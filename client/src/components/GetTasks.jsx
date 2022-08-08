import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../queries/taskQueries'
import Tasks from './Tasks'
export default function GetTasks() {
  const { loading, error, data } = useQuery(GET_TASKS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return <>{!loading && !error && <Tasks tasks={data.tasks} />}</>
}
