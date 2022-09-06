import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDafault()
    console.log(email, password)
  }
  return (
    <>
      {/* <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label htmlHtmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign Up</button>
      </form> */}
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          Submit
        </button>
      </form>
    </>
  )
}

export default Signup
