import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import Countertops from '../assets/images/Countertops.png'
import WindowSills from '../assets/images/windowSills.png'
import Shells from '../assets/images/shells.png'
import {theme} from "../../styles/Theme.styled";

const items = [
    <img src={Countertops} alt={'Countertops'}/>,
    <img src={WindowSills} alt={'WindowSills'}/>,
    <img src={Shells} alt={'Sink'}/>,
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
  width: 100%;
  max-width: 978px;
  display: flex;
  align-items: center;
  justify-content: center;

  .alice-carousel {
    position: unset;

    &__stage-item img {
      transform: unset;
    }

    .alice-carousel__dots {
      position: absolute;
      left: 0;
      bottom: 30px;
    }

    .alice-carousel__dots-item:not(.__custom) {
      width: 40px;
      height: 3px;
      border-radius: unset;

      &.__active {
        background-color: ${theme.colors.accent};
      }
    }

    .alice-carousel__prev-btn, .alice-carousel__next-btn {
      text-align: center;
      position: absolute;
      bottom: 70px;
      width: unset;
    }

    .alice-carousel__prev-btn {
      left: 0;
    }

    .alice-carousel__next-btn {
      left: 50px;
    }

    .alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
      color: ${theme.colors.font};
      width: 45px;
      height: 45px;
      border: 1px solid ${theme.colors.font};

      &.__active {
        background-color: ${theme.colors.accent};
        border: none;
      }
      
      //[data-area] {
      //  position: relative;
      //
      //  ::after {
      //    position: absolute;
      //    transform: translate(-50%, 50%);
      //    width: 10px;
      //    height: 16px;
      //  }
      //}
    }
`
