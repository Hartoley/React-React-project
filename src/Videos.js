import React from 'react'
import './bigvideobox.css'

const Videos = ({image, title, authorName, price}) => {
  return (
    <>
        <div className="videos">
            <img className='vidImage' src={image} alt="" /> 
            <p className='title'>{title}</p>
            <p className='authorName'>{authorName}</p> 
            <div className="price">{price}</div>   
        </div>
    </>
  )
}

export default Videos