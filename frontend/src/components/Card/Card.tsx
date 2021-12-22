import React, { useState } from 'react'
import { Products } from '../../types/types';
import "./card.scss"
import CardOverlay from './CardOverlay/CardOverlay';

interface ICard {
  item: Products;
}

const Card : React.FC<ICard> = ({ item }) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  return (
    <div className='card' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {
        isHovered && <CardOverlay productId={item.id} />
      }
      <div className='card-image'>
        <img src={item.imageURLs} alt='Product' />
      </div>
      <div className='card-info'>
        <h3>{item.name}</h3>
        <p className='desc'>{item.description}</p>
        <p className='price'>{item.price} ₺</p>
      </div>
    </div>
  )
}

export default Card
