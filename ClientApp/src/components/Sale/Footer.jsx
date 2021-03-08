import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
    <>
        <div className="main-cont">
            <div className="container">
                <div className="subs">
                    <p className="pa">Subscribe Now</p>
                    <input className="in" type="text" name="subscribe"/>
                    <input type="button" name="subscribe" value="Subscribe" className="btn"/>
                </div>
            </div>

            <div className="h">
                <h1 >Footer Content</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    </>
    );
}

export default Footer;
