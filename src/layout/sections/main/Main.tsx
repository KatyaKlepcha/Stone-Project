import React from 'react';
import styled from "styled-components";
import {Information} from "./information/Information";
import {Slider} from "../../../components/slider/Slider";
import BgImage from "../../../components/assets/images/Rectangle.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const SectionMain = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'flex-end'}>
                    <Information/>
                    <Slider/>
                    {/*<SliderItem/>*/}
                    {/*<SliderItem/>*/}
                    {/*<SliderItem/>*/}
                    {/*<SliderItem/>*/}
                    {/*<img src={Ideas1Img}/>*/}
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
`

const SliderItem = styled.span`
  display: inline-block;
  width: 39px;
  height: 3px;
  background-color: rgba(255, 255, 255, 1);
  margin-right: 18px;

  &:last-child {
    margin-right: 0;
  }
`