import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { BiDetail } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GET_PROJECTS } from '../queries/projectQueries'
import { GET_TASKS } from '../queries/taskQueries'
export default function ProjectRow({ project }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    refetchQueries: [{ query: GET_PROJECTS }, { query: GET_TASKS }],
    // update(cache, { data: { deleteProject } }) {
    //   const { projects } = cache.readQuery({ query: GET_PROJECTS })
    //   cache.writeQuery({
    //     query: GET_PROJECTS,
    //     data: {
    //       projects: projects.filter(
    //         (project) => project.id !== deleteProject.id
    //       ),
    //     },
    //   })
    // },
  })

  return (
    <tr className="project-row">
      <td>{project.name}</td>

      <td>{project.status}</td>
      <td>
        <a className="btn btn-view" href={`/projects/${project.id}`}>
          <BiDetail />
        </a>
      </td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={deleteProject}
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  )
}
