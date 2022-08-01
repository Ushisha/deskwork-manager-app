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
            <GiTomato className="icon my-auto nav-icon" />
            <p className="mb-0">DeskworkFlow</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pomodo">
                  Pomodoro
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
