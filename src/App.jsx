import './App.css'


import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import * as authServices from './services/authServices.js'


const App = () => {

 const handleSignUp = async (formData) => {
 const res = await authServices.signUp(formData)
 console.log(res)
 }
 

  return (
  
  <> 

    <NavBar />
     <Routes>       
          <Route path='/' element={ <h1>Hello World!!</h1> } />
          <Route path='/sign-up' element={< SignUp handleSignUp={handleSignUp}/>} />
          <Route path='*' element={ <h1>Page not Found - 404</h1> } />

    </Routes>
   

  </>

  )
}





export default App