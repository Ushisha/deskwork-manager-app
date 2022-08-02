//App
import { useState, useEffect } from 'react'
import Tasks from '../components/Tasks'
import PomoTimer from '../components/PomoTimer'

const Pomodoro = () => {
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

  return (
    <>
      <PomoTimer
        updatePomodoro={updatePomodoro}
        updateConfigure={updateConfigure}
        pomodoro={pomodoro}
        pomoBreak={pomoBreak}
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
