import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

import img1 from '../../../images/1.webp';
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jfif'
import img4 from '../../../images/4.webp'
import img5 from '../../../images/5.webp'



const Slider = () => {
    return (
         <Carousel autoPlay="true" infiniteLoop="true" className="">
                <div className="slider-container">
                    <img src={img1} alt=""  /> 
                    
                </div>
                <div className="slider-container">
                    <img src={img2} alt=""  />
                    
                </div>
                <div className="slider-container">
                    <img src={img3} alt=""  />
                
                </div>
                <div className="slider-container">
                    <img src={img4} alt=""  />
                    
                </div>
                <div className="slider-container">
                    <img src={img5} alt=""  />
                   
                </div>
            </Carousel>
    )
}

export default Slider
