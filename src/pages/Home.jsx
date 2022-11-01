import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduts from '../components/home/CardProduts'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import OrderByPrice from '../components/home/OrderByPrice'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

  const [inputText, setInputText] = useState('');
  const [filterByText, setFilterByText] = useState();
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  });

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText !== '' && products) {
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])

  const callBackFilterPrice = product => {
    return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
  }

  return (
    <main className='home'>
      <InputSearch
        inputText={inputText}
        setInputText={setInputText}
      />
      <FilterPrice setFilterByPrice={setFilterByPrice} />
      <FilterCategory />
      <OrderByPrice />
      <div className='home__container'>
        {
          filterByText &&
          filterByText?.filter(callBackFilterPrice).map(product => (
            <CardProduts
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home