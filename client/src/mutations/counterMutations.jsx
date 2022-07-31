import { gql } from '@apollo/client'

const UPDATE_COUNTER = gql`
  mutation UpdateCounter($id: ID!, $count: Int!) {
    updateCounter(id: $id, count: $count) {
      id
      count
    }
  }
`

export { UPDATE_COUNTER }
