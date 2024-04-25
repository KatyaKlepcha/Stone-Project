import React, {useState} from 'react';
import styled from "styled-components";
import Countertops from '../assets/images/countertops.png'
import WindowSills from '../assets/images/windowSills.png'
import Sink from '../assets/images/sink.png'
import {Icon} from "../icon/Icon";

interface Slide {
    id: number;
    image: string;
    caption: string;
}

export const Slider: React.FC = () => {
    const slides: Slide[] = [
        {
            id: 1,
            image: `${Countertops}`,
            caption: 'Slide 1',
        },
        {
            id: 2,
            image: `${WindowSills}`,
            caption: 'Slide 2',
        },
        {
            id: 3,
            image: `${Sink}`,
            caption: 'Slide 3',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    console.log('slides[currentSlide].image', slides[currentSlide].image)

    return (
        <StyledSlider>
            <ContainerBtn>
                <SliderButton onClick={goToPrevSlide}><Icon iconId='arrow' width={'16.67'} height={'16.67'}/></SliderButton>
                <SliderButton onClick={goToNextSlide}><RightIcon iconId='arrow' width={'16.67'} height={'16.67'}/></SliderButton>
            </ContainerBtn>
            <ImageContainer>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].caption}/>
                {/*<div className="caption">{slides[currentSlide].caption}</div>*/}
            </ImageContainer>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
  //position: absolute;
  //top: 0;
  //right: 0;
  //width: 100%;
  //height: 100%;
`

const ContainerBtn = styled.div`
  display: flex;
  //position: absolute;
  gap: 7px;
  //top: 445px;
  //left: 110px;
  z-index: 2;
`

export const SliderButton = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border: 0.5px solid rgba(255, 255, 255, 1);
  background-color: transparent;

  &:last-child {
    //margin-left: 7px;

    svg {
      transform: rotate(180deg);
    }
  }
  
  &:active {
    background-color: rgba(40, 85, 63, 1);
    border: none;
    box-sizing: border-box;
  }
`

const ImageContainer = styled.div`
  //position: absolute;
  //top: 150px;
  //right: 0;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


`

export const RightIcon = styled(Icon)`
  svg {
    transform: rotate(180deg);
  }
`
