import React from 'react'

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">loading...</span>
      </div>
    </div>
  )
}
