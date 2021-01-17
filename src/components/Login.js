import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import getCreds from '../auth/auth'
import '../styles/Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('username')){
            setAuth(true)
        }
    }, [])

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const credentials = getCreds()
        if (password === credentials[email]) {
            sessionStorage.setItem('username', email)
            setAuth(true)
        }
      }
    
    if(isAuth === true){
        return <Redirect to='/dashboard' />
    }

    return (
        <div className='login-container'>
            <h1>Hi! Welcome to my assignment!</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} placeholder='Enter email address' onChange={handleEmailInput} /><br />
                <input type='password' value={password} placeholder='Enter password' onChange={handlePasswordInput} /><br />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login
