import styled from 'styled-components';
import Slider from 'react-slick';

export const WrapperSliderStyle = styled(Slider)`
  .slick-prev, .slick-next {
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
  }

  .slick-prev {
    left: 12px;
  }

  .slick-next {
    right: 28px;
  }

  .slick-prev:before, .slick-next:before {
    font-size: 40px;
    color: #fff;
  }

  .slick-dots {
    bottom: -10px;
    li {
      button:before {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    li.slick-active button:before {
      color: rgba(255, 255, 255, 1);
    }
  }
`




