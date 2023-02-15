import React from "react";
import './Content.css'

const Content = ({titulo, children}) =>{
    return (
        <article className="content">
            {titulo}
            {children}
        </article>
    )
}

export default Content