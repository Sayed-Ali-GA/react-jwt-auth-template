import './App.css'


import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import * as authServices from './services/authServices.js'
import { useState } from 'react'
import SignIn from './components/SignIn/SignIn'


const App = () => {

const initialState = authServices.getUser()

  const [user, setUser] = useState(initialState)

 const handleSignOut = ( ) => {
    localStorage.removeItem('token')
    setUser(null)
  }


 const handleSignUp = async (formData) => {
    try {
      const res = await authServices.signUp(formData)
      setUser(res)
      // return success
      return { success: true }
    } catch(err){
      // return failure flag (then signup form can display message)
      // add message?
      return { success: false, message: err.message }
    }
  }

 
   const handleSignIn = async (formData) => {
    const res = await authServices.signIn(formData)
    setUser(res)
  }

  return (
  
  <> 

    <NavBar user={user} handleSignOut={handleSignOut} />
     <Routes>       
          <Route path='/' element={ <h1>Hello World!!</h1> } />
          <Route path='/sign-up' element={< SignUp handleSignUp={handleSignUp}/>} />
          <Route path='/sign-in' element={< SignIn handleSignIn={handleSignIn}/>} />
          <Route path='*' element={ <h1>Page not Found - 404</h1> } />

    </Routes>
   

  </>

  )
}





export default App