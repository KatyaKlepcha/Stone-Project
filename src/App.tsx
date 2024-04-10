import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./components/main/Main";
import styled from "styled-components";
import BgImage from "././components/assets/images/Rectangle.png"
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <Wrapper>
            <Header/>
            <Main/>
            <Footer/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
