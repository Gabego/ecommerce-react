import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1)
    }
  }
  const handlePlus = () => {
    setCounter(counter + 1)
  }


  const handleAddCart = (() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    const data = {
      id: product.id,
      quantity: counter
    }
    axios.post(URL, data, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    setCounter(1)
  })

  return (
    <article className='product-info'>
      <h2 className='product-info__title'>{product?.title}</h2>
      <p className="product-info__description">{product?.description}</p>
      <footer className='product-info__footer'>
        <div className='product-info__price-container'>
          <h3 className='product-info__price-label'>Price</h3>
          <span className='product-info__price-nunber'>{product?.price}</span>
        </div>
        <div className='product-info__quantity__container'>
          <h3 className='product-info__quantity_label'>Quantity</h3>
          <div className="counter">
            <button onClick={handleMinus} className='counter__minus'>-</button>
            <p className='counter__number'>{counter}</p>
            <button onClick={handlePlus} className='counter__plus'>+</button>
          </div>
        </div>
        <button onClick={handleAddCart} className='add-cart-btn'>
          <i className="product__icon fa-solid fa-cart-shopping">Add to Cart</i>
        </button>
      </footer>
    </article>
  )
}

export default ProductInfo