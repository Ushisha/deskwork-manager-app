//App
import { useState, useEffect } from 'react'
import GetTasks from '../components/GetTasks'
import PomoTimer from '../components/PomoTimer'
import { useMutation, useQuery } from '@apollo/client'
import { GET_COUNTER } from '../queries/counterQueries'
import { UPDATE_COUNTER } from '../mutations/counterMutations'
import { Link } from 'react-router-dom'
import AddTaskModal from '../components/AddTaskModal'

const Pomodoro = () => {
  const id = process.env.REACT_APP_COUNTER_ID
  const [isConfigure, setIsConfigure] = useState(false)
  const [pomodoro, setPomodoro] = useState(25)
  const [pomoBreak, setPomoBreak] = useState(5)

  const updateConfigure = (bool) => {
    setIsConfigure(bool)
  }

  const updatePomodoro = (_pomodoro, _pomoBreak) => {
    setPomodoro(_pomodoro)
    setPomoBreak(_pomoBreak)
  }
  //UseEffect to keep eye on bool change
  useEffect(() => {
    setIsConfigure(isConfigure)
  }, [isConfigure])

  const { loading, error, data } = useQuery(GET_COUNTER, {
    variables: { id: id },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      <PomoTimer
        updatePomodoro={updatePomodoro}
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
        countdata={data.counter.count}
        id={id}
      />
      <div className="card mx-auto w-95 p-4 ">
        <div className="card-body">
          <div className="mb-3 mx-1 align-items-end">
            <AddTaskModal />
          </div>
          <GetTasks />
        </div>

        <Link to="/" className="btn btn-project btn-sm w-20 ms-auto">
          Back
        </Link>
      </div>

      {/* {isConfigure && (
        <PomoConfig
          updateConfigure={updateConfigure}
          updatePomodoro={updatePomodoro}
        />
      )} */}
    </>
  )
}

export default Pomodoro
