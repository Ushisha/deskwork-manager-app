import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import {
  BsFillArrowUpRightCircleFill,
  BsFillArrowDownRightCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GET_PROJECTS } from '../queries/projectQueries'
import { GET_TASKS } from '../queries/taskQueries'

export default function ProjectRow({ project }) {
  const [icon, setIcon] = useState('up')
  //get function to delete a Project & refresh projects list
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    refetchQueries: [{ query: GET_PROJECTS }, { query: GET_TASKS }],
    
  })

  return (
    <tr className="project-row">
      <td className="lead fs-5 text-capitalize">{project.name}</td>

      <td
        className={`fs-6 fw-light  ${
          project.status === 'In Progress'
            ? `pink`
            : project.status === 'Not Started'
            ? `blue`
            : 'green'
        }`}
      >
        {project.status}
      </td>
      <td>
        <a
          className="btn-view"
          href={`/projects/${project.id}`}
          onMouseEnter={() => setIcon('down')}
          onMouseLeave={() => setIcon('up')}
        >
          {icon === 'up' ? (
            <BsFillArrowUpRightCircleFill className="view-icon" />
          ) : (
            <BsFillArrowUpCircleFill className="view-icon" />
          )}
        </a>
      </td>
      <td>
        <button className="btn-project-trash" onClick={deleteProject}>
          <RiDeleteBin6Line className="trash-icon-sm" />
        </button>
      </td>
    </tr>
  )
}
