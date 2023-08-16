import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import C1 from '../asset/c1.png';
import C2 from '../asset/c2.png';
import C3 from '../asset/c3.png';
import './Home.css'
import Background from '../asset/background.png'

const Carousel = ()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
  
    return (
        <>
        <div style={{width:'17%',position:'absolute',bottom:'32px',left:'600px'}}>
      <Slider {...settings}>
        <div>
          <img src={C1} alt="Image 1" />
        </div>
        <div>
          <img src={C2} alt="Image 2" />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      </div>
            <div className="background-row"></div>
</>
    );
  }
  export default Carousel;
  