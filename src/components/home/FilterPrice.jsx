import React from 'react'

const FilterPrice = ({ setFilterByPrice }) => {

  const handleSubmite = e => {
    e.preventDefault()

    const from = +e.target.from.value
    const to = +e.target.to.value

    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity,
    }
    setFilterByPrice(obj)
  }

  return (
    <form onSubmit={handleSubmite}>
      <h3>Price</h3>
      <div>
        <label htmlFor="from">From</label>
        <input type="number" id='from' />
      </div>
      <div>
        <label htmlFor="to">To</label>
        <input type="number" id='to' />
      </div>
      <button>Filter</button>
    </form>
  )
}

export default FilterPrice