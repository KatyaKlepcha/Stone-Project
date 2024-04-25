import React from 'react';
import {Header} from "./layout/header/Header";
import {SectionMain} from "./layout/sections/main/Main";
import styled from "styled-components";
import {Footer} from "./layout/footer/Footer";
import {Advantages} from "./layout/sections/advantages/Advantages";
import {StoneProducts} from "./layout/sections/stoneProducts/StoneProducts";
import {Sale} from "./layout/sections/sales/Sale";
import {Ideas} from "./layout/sections/ideas/Ideas";
import {Form} from "./layout/sections/form/Form";

function App() {
    return (
        <Wrapper>
            <Header/>
            <SectionMain/>
            <Advantages/>
            <StoneProducts/>
            <Sale/>
            <Ideas/>
            <Form/>
            <Footer/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

`
