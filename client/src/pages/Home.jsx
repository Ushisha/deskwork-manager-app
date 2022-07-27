import React from 'react'
import AddProjectModal from '../components/AddProjectModal'
import Projects from '../components/Projects'
import Tasks from '../components/Tasks'
export default function Home() {
  return (
    <>
      <AddProjectModal />
      <Projects />
      <Tasks />
    </>
  )
}
