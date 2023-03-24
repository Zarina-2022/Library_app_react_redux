import React from "react";
import "../assets/styles/priceStyle.css"

const PriceStyle = ({ bookPrice = ""}) => {
    function mouseOn() {
        document.querySelector('.priceStl').style.color = 'green';
     }
     function mouseOut() {
        document.querySelector('.priceStl').style.color = 'red';
     }
  return (
    <div>
      <span
        className="priceStl"
        onMouseOver={()=>mouseOn()} onMouseOut={()=>mouseOut()}
      >{bookPrice} &#8378;</span>
    </div>
  );
};

export default PriceStyle;
