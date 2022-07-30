// import logo from '../assets/logo.png'
import { GiTomato } from 'react-icons/gi'
function Header() {
  return (
    <>
      <nav className="navbar mb-4 p-0">
        <div className="container-fluid ">
          <a
            className="navbar-brand d-flex align-items-centerf"
            href="/"
            id="logo"
          >
            <GiTomato className="icon my-auto nav-icon" />
            <p className="mb-0">DeskworkFlow</p>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
