import React from 'react'
import './Cards.css'

function Cards({image,price,confirm,buy,cart}) {
  const fun=()=>{
    alert("Added to cart")
  }
  return (
    
      <div className="cardb">
          <img src={image} alt="pizza" />
      <a target="_blank" href="https://paytm.me/0id-3Q6"><button className='button'>{buy}</button></a>
      <button className='button'>{price}</button>
      <button onClick={fun} className='button'>{cart}</button>
      <h1 className='confirm'>{confirm}</h1>
      </div>
    
  )
}

export default Cards