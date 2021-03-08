import * as React from 'react';
import { connect } from 'react-redux';

import Box from './Sale/Box';
import Box2 from './Sale/Box2';
import Box3 from './Sale/Box3';

import image from './Sale/images/baroq.jpg';
import image1 from './Sale/images/Mask_Group.png';
import image2 from './Sale/images/shipment-icon.png';
import image3 from './Sale/images/stiching-icon.png';
import image4 from './Sale/images/sadaf.jpg';
import image5 from './Sale/images/model.jpg';
import image6 from './Sale/images/banner.jpg';
import image7 from './Sale/images/banner2.jpg';
import image8 from './Sale/images/banner3.jpg';
import image9 from './Sale/images/free.webp';

import HomeStyle from './Home.module.css';

const Home = () => (
  <>
    <img  className={HomeStyle.banner} src={image} alt="banner"/>
    <br></br>
    <br></br>
    <br></br>
    <div className={HomeStyle.service}>
      <Box image={image1}  alt="banner" heading='Customized Stictching' para='You can use perfect size to be stitched to your perfect fit by using our custom stitching'/>
      <Box image={image2}  alt="banner" heading='Customized Stictching' para='You can use perfect size to be stitched to your perfect fit by using our custom stitching'/>
      <Box image={image3}  alt="banner" heading='Customized Stictching' para='You can use perfect size to be stitched to your perfect fit by using our custom stitching'/>
    </div>

    <div className={HomeStyle.row}>
      <div className={HomeStyle.col1}>
        <Box2 image={image4} alt="model" text="FUCHSIA LAWN" button="Shop now"/>
      </div><br></br>
      <div className={HomeStyle.col2}>
        <Box2 image={image5} alt="model" text="VELVET" button="Shop now"/>
    </div>

    <div className={HomeStyle.row}>
      <div className={HomeStyle.col}>
      <Box3 image={image6} text='UNSTITCHED' button='Shop now'/>
      </div>
      <div className={HomeStyle.col}>
      <Box3 image={image7} text='UNSTITCHED' button='Shop now'/>
      </div>
      <div className={HomeStyle.col}>
      <Box3 image={image8} text='UNSTITCHED' button='Shop now'/>
      </div>
    </div>

    <img className="free" src={image9} alt='free shiping'/>
  </div>
  </>
);

export default connect()(Home);
