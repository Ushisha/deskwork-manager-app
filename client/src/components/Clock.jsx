import { useEffect, useState } from 'react'

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
          <p className="date-display mb-0 fs-3">
            {date.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center lead">
          <p className="mb-0 fs-4 time-display">
            {date.toLocaleTimeString('en-GB')}
          </p>
        </div>
      </div>
    </>
  )
}
