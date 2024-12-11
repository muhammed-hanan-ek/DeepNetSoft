import React from 'react'
import './SelectionBar.css'

const SelectionBar = ({ getAllFoods, getAllDrinks, getAllBrunches }) => {
  return (
    <div id='selectionBarBg'>
        <button onClick={getAllFoods} className='text-light fw-bold btn btn-outline-primary'>FOOD</button>
        <button onClick={getAllDrinks} className='text-light fw-bold btn btn-outline-primary ms-3'>DRINKS</button>
        <button onClick={getAllBrunches} className='text-light fw-bold btn btn-outline-primary ms-3'>BRUNCH</button>
    </div>
  )
}

export default SelectionBar