import { useState } from 'react'

export default function TimerDisplay() {
  // Start with an initial value of 20 seconds
  const { session, setSession } = useState(20)
  const { pathColor, setPathColor } = useState('green')
  // Initially, no time has passed, but this will count up
  // and subtract from the session
  let timePassed = 0
  let timeLeft = session
  function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60)

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`
  }
  return (
    <>
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              className="base-timer__path-remaining ${pathColor}"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
          {formatTimeLeft(timeLeft)}
        </span>
      </div>
    </>
  )
}
