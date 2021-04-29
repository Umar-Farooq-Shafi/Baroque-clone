import * as React from 'react';
import { connect } from 'react-redux';


const Home = () => (
  <div className="w-full">
    <div className="flex justify-center ">
      <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktop_41b4ea29-88ce-4c5a-a121-261f15afe0ae.jpg?v=1618828790" />
    </div>

    <div className="mt-16 flex flex-col space-x-0 px-16 py-2 justify-between bg-gray-200 md:flex-row justify-center md:space-x-6 ">
      <div className="flex flex-col items-center text-center space-x-6 p-4 md:flex-row md:items-left md:text-left">
        <img className="w-12 h-12" src="https://cdn.shopify.com/s/files/1/2277/5269/files/Mask_Group.png?v=1593280728" />
        <div>
          <p className="text-sm font-semibold  font-serif">CUSTOMIZED STICHING</p>
          <p className="text-xs  text-gray-500 hover:text-black">Stitching Priority Service For Local and International Customers.</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-x-6 p-4 md:flex-row md:items-left md:text-left">
        <img className="w-12 h-12" src="https://cdn.shopify.com/s/files/1/2277/5269/files/shipment-icon.png?v=1539256230" />
        <div>
          <p className="text-sm font-semibold  font-serif ">PRODUCT SHIPMENT</p>
          <p className="text-xs  text-gray-500 hover:text-black">Stitching Priority Service For Local and International Customers.</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-x-6 p-4 md:flex-row md:items-left md:text-left">
        <img className="w-12 h-12" src="https://cdn.shopify.com/s/files/1/2277/5269/files/stiching-icon.png?v=1539255938" />
        <div>
          <p className="text-sm font-semibold  font-serif ">STITCHING PRIORITY SERVICE</p>
          <p className="text-xs  text-gray-500 hover:text-black">Stitching Priority Service For Local and International Customers.</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col mt-16 px-16 py-2 mb-0 space-x-0 md:flex-row md:space-x-9  ">
      <div className="text-center">
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/horizontal_banner_c826d022-ff8e-46ad-8e1b-f696419eb5f0.jpg?v=1614155021" />
        <p className="mt-4 text-m font-light  font-serif">FUCHSIA LAWN</p>
        <a className="font-bold underline text-sm" href="#">SHOP NOW</a>
      </div>
      <div className="text-center mt-6 md:mt-0">
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/horizontal_banner_0ad2641a-2004-478d-906e-2eb1244b05ac.jpg?v=1618653950" />
        <p className="mt-4 text-m font-light  font-serif">SWISS VOILE</p>
        <a className="font-bold underline text-sm" href="#">SHOP NOW</a>
      </div>
    </div>

    <div className="flex flex-col mt-9 px-28 py-2 space-x-0  md:flex-row md:space-x-9 ">
      <div className="text-center">
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/bannerbh.jpg?v=1618654206" />
        <p className="mt-4 text-m font-light  font-serif">FUCHSIA LAWN</p>
        <a className="font-bold underline text-sm " href="#">SHOP NOW</a>
      </div>
      <div className="text-center mt-6 md:mt-0">
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/banner_50a102d8-c13a-47fb-9895-9dae8dfb1f00.jpg?v=1618827777" />
        <p className="mt-4 text-m font-light  font-serif">SWISS VOILE</p>
        <a className="font-bold underline text-sm" href="#">SHOP NOW</a>
      </div>
      <div className="text-center mt-6 md:mt-0">
        <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/bannerl.jpg?v=1618654254" />
        <p className="mt-4 text-m font-light  font-serif">SWISS VOILE</p>
        <a className="font-bold underline text-sm" href="#">SHOP NOW</a>
      </div>
    </div>


    <div className="mt-14 object-cover">
      <img src="https://cdn.shopify.com/s/files/1/2277/5269/t/49/assets/Free-Shipping-web-1.jpg?v=6177872171403013179" />
    </div>

  </div>
);

export default connect()(Home);
