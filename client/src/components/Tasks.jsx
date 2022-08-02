import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../queries/taskQueries'
import TodoCard from './TodoCard'
import AddTaskModal from './AddTaskModal'
import { Link } from 'react-router-dom'
export default function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    <>
      <div className="card mx-auto w-95 p-4 ">
        <div className="card-body">
          <div className="mb-3 mx-1 align-items-end">
            <AddTaskModal />
          </div>

          {data.tasks.length > 0 ? (
            <div className="row mx-1">
              {data.tasks.map((task) => (
                <TodoCard key={task.id} task={task} />
              ))}
            </div>
          ) : (
            <p>No Tasks</p>
          )}
        </div>

        <Link to="/" className="btn btn-project btn-sm w-20 ms-auto">
          Back
        </Link>
      </div>
    </>
  )
}
