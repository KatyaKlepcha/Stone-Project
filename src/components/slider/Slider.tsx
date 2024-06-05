import React, {FC} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type SliderPropsType = {
    className?: string
    items: any
}

export const Slider: FC<SliderPropsType> = ({className, items}) => (
    <StyledSlider className={className}>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

export const StyledSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .alice-carousel__dots-item:not(.__custom) {
    width: 40px;
    height: 3px;
    border-radius: unset;

    &.__active {
      background-color: ${theme.colors.accent};
    }
  }
  
  .alice-carousel__prev-btn, .alice-carousel__next-btn {
    width: unset;
  }

  .alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
    position: relative;
    width: 45px;
    height: 45px;
   

    &.__active {
      background-color: ${theme.colors.accent};
      border: none;
    }

    [data-area] {
      &::after {
        height: 17px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    };
  };

  .alice-carousel__next-btn-item [data-area] {
    &::after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`


