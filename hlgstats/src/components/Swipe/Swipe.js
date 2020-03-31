import React, { useState } from 'react';
import "./Swipe.css";
import Swiper from 'react-id-swiper';


class Swipe extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            parallaxSwiper: 0
        };
       this.setParallaxSwiper = this.setParallaxSwiper.bind(this);
    }


    setParallaxSwiper(){
        
    }
    
    render(){
        const  HeroSliderConfigs = {
            containerClass: "swiper-container hero-slider",
            parallax: true,
            centeredSlides: true,
            speed: 500,
            spaceBetween: 0,
            effect:"slide"
        };
        
        return(
            

            <div className="Swipe">
                <Swiper {...HeroSliderConfigs} getSwiper={this.setParallaxSwiper}> 

                </Swiper>
            </div>
        );
    }
}

export default Swipe;