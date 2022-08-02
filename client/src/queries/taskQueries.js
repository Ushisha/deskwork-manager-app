import { gql } from '@apollo/client'

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      todo
      isCompleted
      project {
        id
        name
        description
        status
      }
    }
  }
`
const GET_TASK = gql`
  query getTask($id: ID!) {
    task(id: $id) {
      id
      todo
      isCompleted
      project {
        id
        name
        description
        status
      }
    }
  }
`

export { GET_TASKS, GET_TASK }
