import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './styles/login.css'

const LoginScreen = () => {

  const { handleSubmit, register, reset } = useForm()
  const [isLogged, setIsLogged] = useState(false)

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        setIsLogged(true)
        reset()
      })
      .catch(err => alert(err && 'La contraseña o correo son invalidos'))
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (isLogged) {
    return (
      <div className='login'>
        <h2 className='login-success__title'>User Logged ✔</h2>
        <button className='login-success__btn' onClick={handleLogout}>Logout</button>
      </div>
    )
  }


  return (
    <div className='login'>
      <form className='login-form' onSubmit={handleSubmit(submit)}>
        <div className='login-input__container'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' {...register('email')} />
        </div>
        <div className='login-input__container'>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <button className='login-btn'>Login</button>
      </form>
      <div>
        Don't have an account?
        <Link to="/signup"> Sign Up</Link>
      </div>

    </div>


  )
}

export default LoginScreen