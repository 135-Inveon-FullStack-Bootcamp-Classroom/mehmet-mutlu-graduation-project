import React, { useState } from 'react'
import "./card.scss"
import CardOverlay from './CardOverlay/CardOverlay';

const Card : React.FC = () => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  return (
    <div className='card' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {
        isHovered && <CardOverlay />
      }
      <div className='card-image'>
        <img src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_large.jpg" alt='Product' />
      </div>
      <div className='card-info'>
        <h3>IPhone 11</h3>
        <p className='desc'>A brand new IPhone 11 64 GB White color!</p>
        <p className='price'>11.000 ₺</p>
      </div>
    </div>
  )
}

export default Card
