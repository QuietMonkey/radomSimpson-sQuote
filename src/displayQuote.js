import React from 'react'
import './displayQuote.css'

const displayQuote = ({name, image, quote}) => {
    const createAlt = "simpson's character " + name
    return(
        <div className='displayQuote'>
            <h1>{name}</h1>
            <img src={image} alt={createAlt}/>
            <h2>"{quote}"</h2>
        </div>
    )
}

export default displayQuote