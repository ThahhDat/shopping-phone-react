import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    
      <WrapperSliderStyle {...settings}>
        {arrImage.map((image, index) => (
          <div key={index}>
            <Image src={image} alt="slider" preview={false} width="100%" height="320px"  style={{ borderRadius: '15px' }} />
          </div>
        ))}
      </WrapperSliderStyle>
  );
};

export default SliderComponent;
