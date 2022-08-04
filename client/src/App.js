import Header from './components/Header'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import Pomodoro from './pages/Pomodoro'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import Home from './pages/Home'
import AboutPage from './pages/About'

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
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
