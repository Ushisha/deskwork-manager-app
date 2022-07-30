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
      <div className="container text-center ">
        <p className="lead">
          <p className="mb-0">
            <FaRegCalendar className="icon" />
          </p>
          {date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <p className="display-6">
        {/* <p className="mb-0">
          <FaRegClock />
        </p> */}
        {date.toLocaleTimeString('en-GB')}
      </p>
    </>
  )
}
