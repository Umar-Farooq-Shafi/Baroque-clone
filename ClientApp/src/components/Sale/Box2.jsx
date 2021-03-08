import React from 'react'

import '../Home.module.css'

function Box2(props) {
    return (
    <>
        <div className="images">
            <img src={props.image} alt={props.alt} />
        </div>
        <div className="text2">
            <p>{props.text}</p>
            <button>{props.button}</button>
        </div>
    </>
    )
}

export default Box2
