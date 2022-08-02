//MainPage
import Tasks from './Tasks'
import PomoTimer from './PomoTimer'
export default function Pomodo(props) {
  const { updateConfigure, pomodoro, pomoBreak } = props
  return (
    <>
      <PomoTimer
        updateConfigure={updateConfigure}
        pomoBreak={pomoBreak}
        pomodoro={pomodoro}
      />
      <Tasks />
    </>
  )
}
