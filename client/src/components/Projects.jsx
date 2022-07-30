import ProjectRow from './ProjectRow'
import { GET_PROJECTS } from '../queries/projectQueries'

import Spinner from './Spinner'

import { useQuery } from '@apollo/client'

export default function Projects() {
  // eslint-disable-next-line
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return <Spinner />
  if (error) return <p>Something went wrong...</p>

  return (
    !loading &&
    !error && (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            {/* <th scope="col">Description</th> */}
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            // eslint-disable-next-line
            data.projects.map((project) => (
              <ProjectRow project={project} key={project.id} />
            ))
          }
        </tbody>
      </table>
    )
  )
}
