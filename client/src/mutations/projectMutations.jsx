import { gql } from '@apollo/client'

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      status
    }
  }
`
export { DELETE_PROJECT }
