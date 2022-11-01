import React from 'react'
import { Link } from 'react-router-dom'
import formatDate from '../../utils/formattDate'
import './style/cardpurchases.css'

const CardPurchases = ({ purchase }) => {

  const formatter = new Intl.NumberFormat("en");



  return (
    <article className='purchase-item'>
      <header className='purchase-header'>{formatDate(purchase.updatedAt)}</header>
      <ul className='purchase-products__list'>
        {
          purchase.cart.products.map(product => (
            <li className='product-item' key={product.id}>
              <Link to={`/product/${product.id}`}><h3 className='item-title'>{product.title}</h3></Link>
              <div className='quantity-produts'>{product.productsInCart.quantity}</div>
              <div>$ {`${formatter.format(product.price)}.00`}</div>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default CardPurchases