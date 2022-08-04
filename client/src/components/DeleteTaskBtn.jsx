import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { TiDelete } from 'react-icons/ti'
import { useMutation } from '@apollo/client'
import { GET_TASKS } from '../queries/taskQueries'
import { DELETE_TASK } from '../mutations/taskMutations'

export default function DeleteTaskBtn({ task }) {
  // const navigate = useNavigate()

  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: { id: task.id },

    refetchQueries: [{ query: GET_TASKS }],
  })
  return (
    <div className="d-flex align-items-center ms-auto">
      <button className="delete-btn" onClick={deleteTask}>
        <TiDelete className="delete-icon" />
      </button>
    </div>
  )
}
