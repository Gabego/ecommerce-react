import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useRegisterPost = () => {

  const [newUser, setNewUser] = useState()
  const [error, setError] = useState(null)
  const [response, setResponse] = useState()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`
    axios.post(URL, newUser)
      .then(res => {
        response === 'success' && alert(`${res.data.data.user.firstName} tu cuenta fue creada correctamente.`)
        setResponse(res.data.status)
        console.log(res)
      })
      .catch(err => {
        newUser && alert(err.response.data.message)
        setError(err.response.data.message)
        console.log(err)
      })

  }, [newUser])


  return { setNewUser, error, response }
}

export default useRegisterPost