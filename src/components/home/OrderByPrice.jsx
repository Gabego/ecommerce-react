import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../store/slices/products.slice'

const OrderByPrice = () => {

  const dispatch = useDispatch()

  const handleAsending = () => {
    dispatch(ascendingProducts())
  }
  const handleDescending = () => {
    dispatch(descendingProducts())
  }


  return (
    <div>
      <h3>Order</h3>
      <button onClick={handleAsending} className='order__btn'>Asending ↑</button>
      <button onClick={handleDescending} className='order__btn'>Descending ↓</button>
    </div>
  )
}

export default OrderByPrice