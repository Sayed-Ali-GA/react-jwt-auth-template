import {useState} from 'react'

const SignUp = (props) => {

    const initialState = {
        username: '',
        password: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({ ...formData,[ evt.target.name]: evt.target.value})
        // console.log(evt.target.name)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleSignUp(formData)
       console.log('Form was Submited!!!!!!!!!')
    }

    return(
        <main>

        <h1>Sign Up Form</h1>
      
            <form onSubmit={handleSubmit}>

                 <label> Username:</label>
                 <input type="text" 
                 name='username'
                 onChange={handleChange}/>

                <br /> 

                 <label>Password:</label>
                 <input type="password" 
                 name='password'
                 onChange={handleChange}/>
                       
                       <br />
                <button type="submit">Sign Up</button>       
            </form>
        </main>
    )
}

export default SignUp