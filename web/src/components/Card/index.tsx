import React from 'react'

import './styles.css'

interface card {
    title?: string
    image?: string
    description?: string
}

const Card:React.FC<card> = ({title,image,description}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
    </div>
  );
}

export default Card