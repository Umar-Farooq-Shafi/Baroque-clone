import React from 'react'
import '../Home.module.css'

function Box3(props) {
    return (
    <>
        <img className="images3" src={props.image} alt={props.alt} /><br></br>
        
        <div className="text2">
            <p>{props.text}</p>
            <button>{props.button}</button>
        </div>
    </>
    )
}

export default Box3
