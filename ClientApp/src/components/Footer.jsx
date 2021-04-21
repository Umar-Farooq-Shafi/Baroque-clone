import React from 'react'

const Footer = () => {
    return (
    <>
        <div className="bg-gray-50 p-9">
        <br/>
        <h1 className="text-center font-bold">Subscribe Now</h1><br/>
        <div className="flex justify-center">
            <input type="text" className="w-64 border-2 border-black focus:outline-none focus:ring focus:border-blue-300  "/>
            <button type="button" className="border-2 border-black bg-black text-white hover:bg-transparent hover:text-gray-500 w-24">Subscribe</button><br/>
        </div><br/>

        <div className="flex flex-col justify-evenly font-normal italic md:flex-row m-5">
            <div className="p-2">
                <h1 className="text-xl">About Us</h1>
                <ul className="list-none font-thin text-gray">
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">LookBook</a></li>
                    <li><a href="#">Our Responsibility</a></li>
                </ul>
            </div>
            <div className="p-2">
               <h1 className="text-xl"> Customer Service</h1>
               <ul className="list-none font-thin text-gray">
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Exchange Policy</a></li>
                    <li><a href="#">Track Your Order</a></li>
                </ul>
            </div>
            
            <div className="p-2">
                <h1 className="text-xl">Information</h1>
                <ul className="list-none font-thin text-gray">
                    <li><a href="#">Privacy and Policy</a></li>
                    <li><a href="#">Terms and Condtion</a></li>
                    <li><a href="#">Covid 19 Updates</a></li>
                    <li><a href="#">FAQ'S</a></li>
                </ul>
            </div>
            <div className="p-2">
               <h1 className="text-xl p-3"> We Accept</h1>  
               <div className="flex flex-row space-x-2">
                    <img className="w-10 h-15" src="https://cdn.shopify.com/s/files/1/2277/5269/files/visa-new.png?v=1611402260"/>
                    <img className="w-10 h-15" src="https://cdn.shopify.com/s/files/1/2277/5269/files/master-new.png?v=1611402260"/>
                    <img className="w-10 h-15" src="https://cdn.shopify.com/s/files/1/2277/5269/files/ssl-new.png?v=1611402260"/>
               </div>
            </div>
            <div className="p-2">
                <h1 className="text-xl p-3">Follow Us</h1>
                <div className="flex  flex-row space-x-4">
                    <img className="w-6 h-6" src="https://cdn.shopify.com/s/files/1/2277/5269/files/fb-new.png?v=1611402260"/>
                    <img className="w-6 h-6" src="https://cdn.shopify.com/s/files/1/2277/5269/files/insta-new.png?v=1611402261"/>
                    <img className="w-6 h-6" src="https://cdn.shopify.com/s/files/1/2277/5269/files/you-new.png?v=1611402259"/>
               </div>
            </div>
        </div>
        <p></p>
    </div>

    </>
    );
}

export default Footer;
