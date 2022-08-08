import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { TiDelete } from 'react-icons/ti'
import { useMutation } from '@apollo/client'
import { GET_TASKS } from '../queries/taskQueries'
import { DELETE_TASK } from '../mutations/taskMutations'
import { useEffect, useState, useCallback } from 'react'

export default function DeleteTaskBtn({ task }) {
  // const navigate = useNavigate()
  // const [, updateState] = useState()
  // const forceUpdate = useCallback(() => updateState({}), [])
  const [deleteTask] = useMutation(DELETE_TASK, {
    variables: { id: task.id },
    // onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_TASKS }],
  })
  const handleDeletebBtn = () => {
    deleteTask()
  }
  return (
    <div className="d-flex align-items-center ms-auto">
      <button className="delete-btn" onClick={deleteTask}>
        <TiDelete className="delete-icon" />
      </button>
    </div>
  )
}
