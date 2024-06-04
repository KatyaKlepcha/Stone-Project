import React from 'react';
import styled from "styled-components";
import {Information} from "./information/Information";
import {Slider, StyledSlider} from "../../../components/slider/Slider";
import BgImage from "../../../components/assets/images/Rectangle.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme.styled";
import Countertops from "../../../components/assets/images/Countertops.png";
import WindowSills from "../../../components/assets/images/windowSills.png";
import Shells from "../../../components/assets/images/shells.png";
import Arrow from '../../../components/assets/images/arrow.svg'

const items = [
    <img src={Countertops} alt={'Countertops'}/>,
    <img src={WindowSills} alt={'WindowSills'}/>,
    <img src={Shells} alt={'Sink'}/>,
];

export const SectionMain = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'flex-end'}>
                    <Information/>
                   <SliderHeader items={items}/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-image: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 140px;
  display: flex;

  ${Container} {
    padding: 35px 0 68px;
  }

  ${FlexWrapper} {
    position: relative;
  }

  img {
    max-width: 978px;
    height: 600px;
    width: 100%;
    object-fit: cover;
    transform: translateX(160px);
  }

  @media ${theme.media.tablet} {
    ${Container} {
      padding: 0 20px;
    }
  }

  ${StyledSlider} {
    max-width: 978px;
    margin-right: -86px;

    @media screen and (max-width: 1290px) {
      margin-right: 0;
    }

    .alice-carousel {
      position: unset;

      &__stage-item img {
        transform: unset;
      }

      .alice-carousel__dots {
        position: absolute;
        left: 0;
        bottom: 80px;
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
        bottom: 120px;
      }

      .alice-carousel__prev-btn {
        left: 0;
      }

      .alice-carousel__next-btn {
        left: 50px;
      }

      .alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
        color: ${theme.colors.font};
        border: 1px solid ${theme.colors.font};

        [data-area] {
          &::after {
            content: url(${Arrow});
          }
        }
      }
    }
  }
`

const SliderHeader = styled(Slider)`{
  @media ${theme.media.tablet} {
    display: none;
  }
}`