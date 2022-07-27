import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>404</h1>
      <p className="lead">Ooops, this page does not exist...</p>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  )
}
