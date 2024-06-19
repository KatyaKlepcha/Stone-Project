import React from 'react';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Footer} from "./layout/footer/Footer";
import {Form} from "./layout/sections/form/Form";
import {Outlet} from "react-router-dom";
import {StoneProducts} from "./layout/sections/stoneProducts/catalog/stoneProducts/StoneProducts";

function App() {
    return (
        <Wrapper>
            <Header/>
            <Outlet/>
            <Form/>
            <StoneProducts/>
            <Footer/>
        </Wrapper>

    );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`