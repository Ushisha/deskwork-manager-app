import { useEffect, useState } from 'react'
import { FaRegCalendar, FaRegClock } from 'react-icons/fa'

export default function Clock() {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <div className="container text-center clock-info">
        <div className=" d-flex align-items-center justify-content-center lead ">
          {/* <div className="mb-1">
            <FaRegCalendar className="icon calendar-icon" />
          </div> */}
          <p className="date-display mb-0 fs-3">
            {date.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center lead">
          {/* <div className="mb-1">
            <FaRegClock className="icon clock-icon" />
          </div> */}

          <p className="mb-0 fs-4 time-display">
            {date.toLocaleTimeString('en-GB')}
          </p>
        </div>
      </div>
    </>
  )
}
