import React from 'react';
import styled from "styled-components";
import Frame from '../assets/images/Frame.png'
import {Information} from "./information/Information";
import {Slider} from "../slider/Slider";

export const Main = () => {
    return (
        <StyledMain>
            <Information/>
            <MainPicture src={Frame} alt={'mainPicture'}/>
            {/*<Slider/>*/}
        </StyledMain>
    );
};

const StyledMain = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

`

const MainPicture = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 978px;
  height: 603px;
`

const SliderItem = styled.div`
  background-color: beige;
  width: 300px;
  height: 200px;
`