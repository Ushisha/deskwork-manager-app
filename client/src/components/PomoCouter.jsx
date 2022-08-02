import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_COUNTER } from '../queries/counterQueries'

import { GiTomato } from 'react-icons/gi'
import CounterResetBtn from './CounterResetBtn'

export default function PomoCouter() {
  const id = process.env.REACT_APP_COUNTER_ID

  const { loading, error, data } = useQuery(GET_COUNTER, {
    variables: { id },
  })

  if (error) return <p>Somthing went wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div className="container pomo-display mt-3">
          <div className="pomo-counter position-relative mx-auto">
            <div className="icon-container">
              <GiTomato className="tomato-icon" />
            </div>

            <p className="lead counter fw-semibold">{data.counter.count}</p>
          </div>
          <CounterResetBtn id={id} />
        </div>
      )}
    </>
  )
}