import React from "react";
import './Content.css'

const Content = ({titulo, children}) =>{
    return (
        <article className="content">
            <h1>{titulo}</h1>
            {children}
        </article>
    )
}

export default Content