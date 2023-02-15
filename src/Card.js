import React from "react";
import './Card.css'

const Card = ({titulo, texto}) =>{
    return(
        <div className="card">
            <img src="" />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}

export default Card