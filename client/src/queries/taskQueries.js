import { gql } from '@apollo/client'

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      todo
      status
    }
  }
`
export { GET_TASKS }
