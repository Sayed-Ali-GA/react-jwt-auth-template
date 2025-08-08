import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const navigate = useNavigate()

  const initialState = {
    username: '',
    password: '',
    passwordConf: '',
  }

  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (props.user) {
      navigate('/')
    }
  }, [props.user])

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  // made this function asynchronous
  const handleSubmit = async (evt) => {
    evt.preventDefault()  
    // saved the return as "result"
    const result = await props.handleSignUp(formData)
    // if sign up is succssful, navigate to home
    if (result.success){
      navigate('/')
    } else {
      // otherwise, set the error message state 
      setError(result.message)
    }
  }

  let formIsInvalid = true

  if (formData.username && formData.password && formData.password === formData.passwordConf) {
    formIsInvalid = false
  }

  return (
    <main className="sign-up-page">
  <h1>Sign Up</h1>

  {error && <p className="error-message">{error}</p>}

  <form className="sign-up-form" onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
    <input
      id="username"
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
      required
    />

    <label htmlFor="password">Password:</label>
    <input
      id="password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />

    <label htmlFor="passwordConf">Confirm Password:</label>
    <input
      id="passwordConf"
      type="password"
      name="passwordConf"
      value={formData.passwordConf}
      onChange={handleChange}
      required
    />

    <button className="btn" type="submit" disabled={formIsInvalid}>
      Sign Up
    </button>
  </form>
</main>

  )
}

export default SignUp
