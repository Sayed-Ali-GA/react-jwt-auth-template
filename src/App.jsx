import './App.css'


import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import * as authServices from './services/authServices.js'
import { useState, useEffect } from 'react'
import SignIn from './components/SignIn/SignIn'
import * as hootService from './services/hootService'
import HootList from './components/HootList/HootList'
import HootDetails from './components/HootDetails/HootDetails'


const App = () => {

  const initialState = authServices.getUser()

  const [user, setUser] = useState(initialState)
  const [hoots, setHoots] = useState([])

  useEffect(() => {
    // going to run a service to fetch all hoots
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index()
      setHoots(hootsData)
    }
    fetchAllHoots()
  }, [])


  const handleSignUp = async (formData) => {
    try {
      const res = await authService.signUp(formData)
      setUser(res)
      // return success
      return { success: true }
    } catch(err){
      // return failure flag (then signup form can display message)
      // add message?
      return { success: false, message: err.message }
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const handleSignIn = async (formData) => {
    const res = await authService.signIn(formData)
    setUser(res)
  }

  return (
    <>
      <NavBar user={user} handleSignOut={handleSignOut} />
      <Routes>
          <Route path='/' element={<h1>Hello world!</h1>} />
          <Route path='/hoots' element={<HootList hoots={hoots} />} />
          <Route path='/hoots/:hootId' element={<HootDetails />} />
          <Route path='/sign-up' element={<SignUp handleSignUp={handleSignUp} user={user} />} />
          <Route path='/sign-in' element={<SignIn handleSignIn={handleSignIn} user={user} />} />
          <Route path='*' element={<h1>404</h1>} />
    </Routes>
    </>

  )
}

export default App