import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice';

const FilterCategory = () => {

  const [categories, setCategories] = useState();
  const dispatch = useDispatch()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, []);


  const handleFetchcategory = id => {
    if (id) {
      //Peticion de filtro por categoria
      dispatch(getProductsByCategory(id))
    } else {
      //peticion de todas las categorias
      dispatch(getAllProducts())
    }
  }

  return (

    <details open>
      <summary>category</summary>
      <ul>
        <li onClick={() => handleFetchcategory()}>All Products</li>
        {
          categories?.map(category => (
            <li onClick={() => handleFetchcategory(category.id)} key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </details>

  )
}

export default FilterCategory