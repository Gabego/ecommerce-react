import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useRegisterPost from '../hook/useRegisterPost'
import './styles/signup.css'


const defaulvalue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phone: "",
  role: "admin"
}

const SignUp = () => {

  const { setNewUser, response } = useRegisterPost()

  const { handleSubmit, reset, register } = useForm({ defaulvalue })

  const submit = data => {
    setNewUser(data)
    response && reset()

  }

  return (
    <form className='form__sign-up' onSubmit={handleSubmit(submit)} required >
      <label htmlFor="email">Email</label>
      <input type="email" id='email' {...register('email')} required />
      <label htmlFor="firstName">First Name</label>
      <input type="text" id='firstName' {...register('firstName')} required />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id='lastName' {...register('lastName')} required />
      <label htmlFor="password">Password (8 characters minimum)</label>
      <input type="password" id='password' minLength="8" {...register('password')} required />
      <label htmlFor="phone">Phone (10 characters)</label>
      <input type="tel" id='phone' minLength="10" maxLength="10"{...register('phone')} required />
      <button className='login-btn'>Sign Up</button>      <div>
        Already have an account?
        <Link to="/login"> login</Link>
      </div>
    </form>

  )
}

export default SignUp