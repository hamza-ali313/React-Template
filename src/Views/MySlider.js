import React from "react";
import Slider from "react-slick";
const MySlider = (props) => {
  return (
    <div>
      <Slider slidesToShow={3} swipeToSlide={true} focusOnSelect={true} arrows={true}>
        <div>
            <img src={props.first}/>
        </div>
        <div>
           <img src={props.second}/>
        </div>
        <div>
           <img src={props.third}/>
        </div>
        <div>
           <img src={props.fourth}/>
        </div>
        <div>
          <img src={props.fifth}/>
        </div>
        <div>
          <img src={props.sixth}/>
        </div>
      </Slider>
    </div>
  );
};
export default MySlider;