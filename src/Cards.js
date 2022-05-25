import React from 'react'
import './Cards.css'

function Cards({image,price}) {
  return (
    
      <div className="cardb">
          <img src={image} alt="pizza" />
      <button className='button'>Buy now</button>
      <button className='button'>{price}</button>
      <button className='button'>Add to card</button>
      </div>
    
  )
}

export default Cards