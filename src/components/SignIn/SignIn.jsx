import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  const navigate = useNavigate()

  const initialState = {
    username: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (props.user) {
      navigate('/')
    }
  }, [props.user])

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleSignIn(formData)
    navigate('/')
  }

  return (
   <main className="sign-in-page">
  <h1>Sign In</h1>
 
     

  <form className="sign-in-form" onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
    <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} required />

    <label htmlFor="password">Password:</label>
    <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />

    <button className="btn" type="submit">Sign In</button>
  </form>
</main>

  )
}

export default SignIn
