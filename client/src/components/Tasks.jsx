import Spinner from './Spinner'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_TASKS } from '../queries/taskQueries'
import TodoCard from './TodoCard'
import AddTaskModal from './AddTaskModal'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
export default function Tasks({ data }) {
  // const { loading, error, data } = useQuery(GET_TASKS)

  // if (loading) return <Spinner />
  // if (error) return <p>Something went wrong...</p>
  const [tasks, setTasks] = useState(data)
  console.log(data)
  const handleEnd = (result) => {
    console.log(result)
    if (!result.destination) {
      return
    }
    const newTasks = [...tasks]
    const [removed] = newTasks.splice(result.source.index, 1)
    newTasks.splice(result.destination.index, 0, removed)
    setTasks(newTasks)
  }
  useEffect(() => {})

  return (
    <>
      {/* <div className="card mx-auto w-95 p-4 ">
        <div className="card-body">
          <div className="mb-3 mx-1 align-items-end">
            <AddTaskModal />
          </div> */}

      {tasks.length > 0 ? (
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="to-dos">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                role="list"
                className="todo-list p-0"
                id="todoList"
                aria-labelledby="list-heading"
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <TodoCard
                        key={task.id}
                        task={task}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <p>No Tasks</p>
      )}
      {/* </div>

        <Link to="/" className="btn btn-project btn-sm w-20 ms-auto">
          Back
        </Link>
      </div> */}
    </>
  )
}
