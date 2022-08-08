//MainPage
import Tasks from './Tasks'
import PomoTimer from './PomoTimer'
import GetTasks from './GetTasks'
export default function Pomodo(props) {
  const { updateConfigure, pomodoro, pomoBreak } = props
  return (
    <>
      <PomoTimer
        updateConfigure={updateConfigure}
        pomoBreak={pomoBreak}
        pomodoro={pomodoro}
      />
      <GetTasks />
    </>
  )
}
