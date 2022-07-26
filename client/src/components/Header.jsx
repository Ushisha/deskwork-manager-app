import logo from '../assets/logo.png'
function Header() {
  return (
    <>
      <nav className="navbar bg-light mb-4 p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" id="logo">
            <img
              src={logo}
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-center"
            />
            DeskworkFlow
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
