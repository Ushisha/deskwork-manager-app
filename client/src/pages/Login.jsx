import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDafault()
    console.log(email, password)
  }
  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label HtmlFor="Email1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label HtmlFor="Password1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/Signup">Signup</Link>
      </p>
    </>
  )
}

export default Login
