import React, { useState } from 'react';
import "./Swipe.css";
import Swiper from 'react-id-swiper';
//import 'react-id-swiper/lib/styles/css/swiper.css'
import 'swiper/css/swiper.css';






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





  console.log("CHECKING: " + props.p1.name);
  return (

    < Swiper className="Swiper" {...params} getSwiper={setParallaxSwiper} >
      <div className="slide" onClick={(() => { props.passUp(props.p1) })}>
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={props.p1.backgroundImage} className="responsive" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p1.image} width="50%" alt={props.p1.name}></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p1.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p1.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p1.team}</div>
      </div>


      <div className="slide" onClick={(() => { props.passUp(props.p2) })}>
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={props.p2.backgroundImage} className="responsive" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p2.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p2.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p2.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p2.team}</div>
      </div>


      <div className="slide" onClick={(() => { props.passUp(props.p3) })}>
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={props.p3.backgroundImage} className="responsive" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p3.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p3.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p3.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p3.team}</div>
      </div>


      <div className="slide" onClick={(() => { props.passUp(props.p4) })}>
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={props.p4.backgroundImage} className="responsive" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p4.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p4.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p4.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p4.team}</div>
      </div>

      <div className="slide" onClick={(() => { props.passUp(props.p5) })} >
        <div className="swiperImage" data-swiper-parallax={parallaxAmount}>
          <img src={props.p5.backgroundImage} className="responsive" alt="UCR Esports" />
        </div>
        <div className="player" data-swiper-parallax="-100">
          <img src={props.p5.image} width="50%" alt="Logo HLG"></img>
        </div>
        <div className="subtitle" data-swiper-parallax="-300" data-swiper-parallax-duration="600">{props.p5.position}</div>
        <div className="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
          {props.p5.name}
        </div>
        <div className="title" data-swiper-parallax="600" data-swiper-parallax-opacity="0.2">{props.p5.team}</div>
      </div>

    </Swiper >
  );
}

export default Swipe;