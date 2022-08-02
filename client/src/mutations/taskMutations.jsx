import { gql } from '@apollo/client'

const ADD_TASK = gql`
  mutation AddTask($todo: String!, $isCompleted: Boolean!, $projectId: ID!) {
    addTask(todo: $todo, isCompleted: $isCompleted, projectId: $projectId) {
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
const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`
const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $todo: String!, $isCompleted: Boolean!) {
    updateTask(id: $id, todo: $todo, isCompleted: $isCompleted) {
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
export { DELETE_TASK, ADD_TASK, UPDATE_TASK }
