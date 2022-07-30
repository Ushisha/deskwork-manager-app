import { gql } from '@apollo/client'

const ADD_TASK = gql`
  mutation AddTask($todo: String!, $status: TaskStatus!, $projectId: ID!) {
    addTask(todo: $todo, status: $status, projectId: $projectId) {
      id
      todo
      status
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
  mutation UpdateTask($id: ID!, $todo: String!, $status: TaskStatusUpdate!) {
    updateTask(id: $id, todo: $todo, status: $status) {
      id
      todo
      status
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
