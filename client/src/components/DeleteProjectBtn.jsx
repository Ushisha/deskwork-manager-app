import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useMutation } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'
import { DELETE_PROJECT } from '../mutations/projectMutations'

export default function DeleteProjectBtn({ projectId }) {
  const navigate = useNavigate()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  })
  return (
    <div className="trash-container">
      <button className="btn trash-btn" onClick={deleteProject}>
        <RiDeleteBin6Line className="trash-icon" />
      </button>
    </div>
  )
}
