import React from 'react'
import AddProjectModal from '../components/AddProjectModal'
import Projects from '../components/Projects'
import Weather from '../components/Weather'
import InfoCard from '../components/InfoCard'
// import Tasks from '../components/Tasks'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row align-items evenly justify-content-evenly">
          <div
            className="col-md-4 justify-content-center col-sm-12 flex-nowrap
          "
          >
            <div className="row d-flex justify-content-evenly mb-2">
              <InfoCard />
              <Weather />
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className=" mb-0 fw-normal projects">PROJECTS</h3>
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
