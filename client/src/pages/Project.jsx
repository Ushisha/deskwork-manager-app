import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'
import AddProjectTaskModal from '../components/AddProjectTaskModal'
import TodoList from '../components/TodoList'
import DeleteProjectBtn from '../components/DeleteProjectBtn'
import EditProjectForm from '../components/EditProjectForm'

export default function Project() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
    // fetchPolicy: 'network-only',
    // nextFetchPolicy: 'cache-only',
  })

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-95 p-4 card position-relative">
          <DeleteProjectBtn projectId={data.project.id} />
          <div className="card-body">
            <EditProjectForm project={data.project} />
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h4 className="mt-3">Status</h4>
            <p className="lead">{data.project.status}</p>
            <div className="d-flex justify-content-between">
              <h4>Tasks</h4>
              <AddProjectTaskModal projectId={data.project.id} />
            </div>

            <TodoList projectId={data.project.id} />
          </div>

          <Link
            to="/pomodoro"
            className="btn btn-link pomo-link btn-sm w-20 fw-semibold"
          >
            <span className="pomo-span">Go to</span> Pomodoro
          </Link>
          <Link
            to="/"
            className="btn btn-project btn-sm w-20 ms-auto fw-semibold"
          >
            Back
          </Link>
        </div>
      )}
    </>
  )
}
