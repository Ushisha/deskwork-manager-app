import { useQuery } from '@apollo/client'
import { GET_COUNTER } from '../queries/counterQueries'
import { ReactComponent as PomoIcon } from '../assets/pomo.svg'
import CounterResetBtn from './CounterResetBtn'

export default function PomoCounter() {
  const id = process.env.REACT_APP_COUNTER_ID

  const { loading, error, data } = useQuery(GET_COUNTER, {
    variables: { id },
  })

  if (error) return <p>Somthing went wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div className="container pomo-display mt-3 text-center">
          <h6 className="text-nowrap pomo-title fs-6">Pomo Count</h6>
          <div className="pomo-counter position-relative mx-auto">
            <div className="icon-container">
              <a href="/pomodoro" id="tomato">
                <PomoIcon className="tomato-icon" />
                <p className="lead counter fw-semibold">{data.counter.count}</p>
              </a>
            </div>
          </div>
          <div className="m-1">
            <CounterResetBtn id={id} />
          </div>
        </div>
      )}
    </>
  )
}
