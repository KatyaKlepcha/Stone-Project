import React from 'react';
import styled from "styled-components";
import {Information} from "./information/Information";
import {Slider} from "../../../components/slider/Slider";
import BgImage from "../../../components/assets/images/Rectangle.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme.styled";

export const SectionMain = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'flex-end'}>
                    <Information/>
                    <SliderHeader/>
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
`

const SliderHeader = styled(Slider)`{
  @media ${theme.media.tablet} {
    display: none;
  }
}`