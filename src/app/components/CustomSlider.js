import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/customSlider.scss";

function CustomSlider({ images }) {
    let settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
    
    };
    return (
        <div className="custom-slider-container">
        <Slider {...settings}>
            {images?.map((item)=>{
                return(<div key={item?.length+1} >
                    <img src={item} key={item} height="100%" />
                </div>)
            })}
            
         
        </Slider>
        </div>
    );
}

  const PrevArrow =({onClick}) => {
    return (
        <div className='custom-arrow prev' onClick={onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
      </div>
    )
  }

  const NextArrow =(onClick) => {
    return (
        <div className='custom-arrow next' onClick={onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
             <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
      </div>
    )
  }

export default CustomSlider