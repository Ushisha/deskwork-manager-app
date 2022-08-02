//App
import { useState, useEffect } from 'react'
import Tasks from '../components/Tasks'
import PomoTimer from '../components/PomoTimer'
import { useMutation, useQuery } from '@apollo/client'
import { GET_COUNTER } from '../queries/counterQueries'
import { UPDATE_COUNTER } from '../mutations/counterMutations'
const Pomodoro = () => {
  const id = process.env.REACT_APP_COUNTER_ID
  const [isConfigure, setIsConfigure] = useState(false)
  const [pomodoro, setPomodoro] = useState(0)
  const [pomoBreak, setPomoBreak] = useState(0)

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

      <Tasks />

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
