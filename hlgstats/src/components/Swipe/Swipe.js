import React, { useState } from 'react';
import "./Swipe.css";
import Swiper from 'react-id-swiper';
//import 'react-id-swiper/lib/styles/css/swiper.css'
import 'swiper/css/swiper.css';
import image1 from '../Images/HLG_LOGO.png';

const Swipe = ()=>{
    const params = {
      centeredSlide: true,
      parallax: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }

      const [parallaxSwiper, setParallaxSwiper] = useState(null);
      const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;

      const start = image1.lastIndexOf("/");
      const last = image1. indexOf(".");
      var result = image1;
      if(start && last != -1){
        result = image1.substring(start+1,last);
      }
     
      return(
        <Swiper {...params} getSwiper={setParallaxSwiper}>


          <div className="slide">
            <div className="title" data-swiper-parallax="-100">
              League of Legends A Team
            </div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>{result} </p>
            </div>
            <div data-swiper-parallax-opacity="0.5">Ready for a swell battle!</div>
            <div data-swiper-parallax-scale="0.15">I will change scale</div>
            <div data-swiper-parallax={parallaxAmount}>
              <img src={image1} className="responsive" width="300px" height="250px" />
            </div>
          </div>
         
          <div className="slide">
            <div className="title" data-swiper-parallax="-100">
              League of Legends A Team
            </div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>{result} </p>
            </div>
            <div data-swiper-parallax-opacity="0.5">Ready for a swell battle!</div>
            <div data-swiper-parallax-scale="0.15">I will change scale</div>
            <div data-swiper-parallax={parallaxAmount}>
              <img src={image1} className="responsive" width="300px" height="250px" />
            </div>
          </div>


          <div className="slide">
            <div className="title" data-swiper-parallax="-100">
              League of Legends A Team
            </div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>{result} </p>
            </div>
            <div data-swiper-parallax-opacity="0.5">Ready for a swell battle!</div>
            <div data-swiper-parallax-scale="0.15">I will change scale</div>
            <div data-swiper-parallax={parallaxAmount}>
              <img src={image1} className="responsive" width="300px" height="250px" />
            </div>
          </div>

          <div className="slide">
            <div className="title" data-swiper-parallax="-100">
              League of Legends A Team
            </div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>{result} </p>
            </div>
            <div data-swiper-parallax-opacity="0.5">Ready for a swell battle!</div>
            <div data-swiper-parallax-scale="0.15">I will change scale</div>
            <div data-swiper-parallax={parallaxAmount}>
              <img src={image1} className="responsive" width="300px" height="250px" />
            </div>
          </div>

          <div className="slide">
            <div className="title" data-swiper-parallax="-100">
              League of Legends A Team
            </div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>{result} </p>
            </div>
            <div data-swiper-parallax-opacity="0.5">Ready for a swell battle!</div>
            <div data-swiper-parallax-scale="0.15">I will change scale</div>
            <div data-swiper-parallax={parallaxAmount}>
              <img src={image1} className="responsive" width="300px" height="250px" />
            </div>  
          </div>

        </Swiper>
      );
}

export default Swipe;