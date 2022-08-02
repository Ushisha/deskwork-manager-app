import React from 'react'
import { GiTomato } from 'react-icons/gi'

export default function TomatoCase({ tomatoCount }) {
  return (
    <>
      <div className="d-flex m-2 justify-content-center">
        {[...Array(tomatoCount)].map((elementInArray, index) => (
          <div>
            <GiTomato className="tomato" />
          </div>
        ))}
      </div>
    </>
  )
}
