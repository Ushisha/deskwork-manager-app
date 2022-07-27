import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'
import AddTaskModal from '../components/AddTaskModal'
import TodoList from '../components/TodoList'

export default function Project() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } })

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-95 p-5 card">
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <div className="card-body">
            <AddTaskModal />
            <TodoList projectId={data.project.id} />
          </div>

          <Link to="/" className="btn btn-light btn-sm w-20 ms-auto">
            Back
          </Link>
        </div>
      )}
    </>
  )
}
