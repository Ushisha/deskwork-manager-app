// import logo from '../assets/logo.png'
import { GiTomato } from 'react-icons/gi'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mb-4 p-0">
        <div className="container-fluid ">
          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
            id="logo"
          >
            {/* <img src="/src/assets/logo.png" alt="" width="30" height="24"></img> */}

            <GiTomato className="icon my-auto nav-icon" />
            <p className="mb-0">PomoFlow</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pomodoro">
                  Pomodoro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
