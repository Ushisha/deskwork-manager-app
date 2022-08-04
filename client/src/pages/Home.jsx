import React from 'react'
import AddProjectModal from '../components/AddProjectModal'
import Projects from '../components/Projects'
import Weather from '../components/Weather'

// import Tasks from '../components/Tasks'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 justify-content-center">
            <Weather />
          </div>
          <div className="col-md-7 ">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className=" mb-0 projects">PROJECTS</h1>
              <div className="">
                <AddProjectModal />
              </div>
            </div>

            <Projects />
          </div>
        </div>
      </div>
    </>
  )
}
