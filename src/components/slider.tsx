import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sale from "../images/sale.jfif";
import salepage2 from "../images/salepage2.jfif";
import salepage3 from "../images/salepage3.jfif";

const AutoplaySlider = withAutoplay(AwesomeSlider);


export const Slider=()=>{
return(
    <AutoplaySlider 
    cancelOnInteraction={false}
    interval={3000}
      play={true}
      className=""
    >
        <div data-src={sale}/>
        <div data-src={salepage2}/>
        <div data-src={salepage3}/>
    </AutoplaySlider>
        
    
);
};

