import React, {FC} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import Countertops from '../assets/images/Countertops.png'
import WindowSills from '../assets/images/windowSills.png'
import Shells from '../assets/images/shells.png'
import {theme} from "../../styles/Theme.styled";
import Arrow from '../assets/images/arrow.svg'

const items = [
    <img src={Countertops} alt={'Countertops'}/>,
    <img src={WindowSills} alt={'WindowSills'}/>,
    <img src={Shells} alt={'Sink'}/>,
];

type SliderPropsType = {
    className?: string
}

export const Slider: FC<SliderPropsType> = ({className}) => (
    <StyledSlider className={className}>
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
  margin-right: -86px;

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
      bottom: 50px;
      width: unset;
    }

    .alice-carousel__prev-btn {
      left: 0;
    }

    .alice-carousel__next-btn {
      left: 50px;
    }

    .alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
      position: relative;
      color: ${theme.colors.font};
      width: 45px;
      height: 45px;
      border: 1px solid ${theme.colors.font};

      &.__active {
        background-color: ${theme.colors.accent};
        border: none;
      }
      
      [data-area] {
        &::after {
          height: 17px;
          content:  url(${Arrow});
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .alice-carousel__next-btn-item [data-area] {
      &::after {
        transform: translate(-50%, -50%) rotate(180deg);
      }
    }
`
