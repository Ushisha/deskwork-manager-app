import { gql } from '@apollo/client'

const GET_COUNTER = gql`
  query getCounter($id: ID!) {
    counter(id: $id) {
      id
      count
    }
  }
`
export { GET_COUNTER }
