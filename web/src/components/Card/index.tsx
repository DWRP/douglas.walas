import React, { useState } from 'react'

import './styles.css'

interface card {
    title?: string
    image?: string
    description?: string
    reference?: string
}

const Card:React.FC<card> = ({title,image,description,reference}) => {
    const [cardData,setCardData] = useState(false)
    
    return (
        <div className="card">
            <div className="preview">
                <img src={require(`../../assets/images/${image}.svg`)} alt="" />
            </div>

            <div className="informations">
                <div className="title">
                    <h2>NAME</h2>
                    <p>{title}</p>
                </div>

                <div className="descripion">
                    <h2>DESCRIPTION</h2>
                    <p>{description}</p>
                    {reference?<p>Based in repository:<a href={reference} target="_blank" rel="noopener noreferrer" className="links"> {title} </a></p>:""}
                </div>

                <button className="button infos" onClick={()=>alert('Sorry, but this not implemented')}>VIEW MORE</button>
            </div>
            <div className={`${cardData?"card-data":"card-data hidden"}`}>
                <div className="cdata">
                    <button className="button infos" onClick={()=>setCardData(!cardData)}>VIEW MORE</button>
                    <h1>Desabled in moment</h1>
                </div>
            </div>
        </div>
  );
}

export default Card