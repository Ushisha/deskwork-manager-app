import React from 'react'
import Clock from './Clock'
import PomoCouter from './PomoCouter'
export default function InfoCard() {
  return (
    <>
      <div className="card info-card mb-3">
        <div className="card-body">
          <Clock />
          <PomoCouter />
        </div>
      </div>
    </>
  )
}
