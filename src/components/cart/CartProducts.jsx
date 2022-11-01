import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'

const CartProducts = ({ product }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err))
  }



  return (
    <article>
      <h2>{product.title}</h2>
      <ul>
        <li>Price <span>{product.price}</span></li>
        <li>Quantity <span>{product.productsInCart.quantity}</span></li>
      </ul>
      <button onClick={handleDelete} ><i className="fa-regular fa-trash-can"></i>
      </button>
    </article>
  )
}

export default CartProducts