import React, { useState } from 'react';
import "./Swipe.css";
import Swiper from 'react-id-swiper';
//import 'react-id-swiper/lib/styles/css/swiper.css'
import 'swiper/css/swiper.css';
import image1 from './Images/HLGBlackandGold.png';





const Swipe = (props) => {
  const params = {
    centeredSlides: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      //type: 'bullets',
      clickable: true
    },
    /*navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },*/
    spaceBetween: 0
  }





  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;

  const start = image1.lastIndexOf("/");
  const last = image1.indexOf(".");
  var result = image1;
  if (start && last !== -1) {
    result = image1.substring(start + 1, last);
  }



  console.log("CHECKING: " + props.p1.name);
  return (

    < Swiper className="Swiper" {...params} getSwiper={setParallaxSwiper} >


      <div className="slide" onClick={(() => { props.passUp(props.p1.ign) })}>
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={image1} className="responsive" width="100%" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>
      </div>

      <div className="slide" >
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={image1} className="responsive" width="100%" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>
      </div>


      <div className="slide" >
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={image1} className="responsive" width="100%" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>

      </div>

      <div className="slide" >
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={image1} className="responsive" width="100%" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>

      </div>

      <div className="slide" >
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={image1} className="responsive" width="100%" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>
      </div>

    </Swiper >
  );
}

export default Swipe;