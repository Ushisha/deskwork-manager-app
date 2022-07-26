import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddProjectModal from './components/AddProjectModal'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
        tasks: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <AddProjectModal />
            <Projects />
            <Tasks />
          </div>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
