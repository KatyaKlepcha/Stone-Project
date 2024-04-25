import React from 'react';
import Ideas1Img from '../../../components/assets/images/inspirationSources/Idea1.png'
import Ideas2Img from '../../../components/assets/images/inspirationSources/Idea2.png'
import Ideas3Img from '../../../components/assets/images/inspirationSources/Idea3.png'
import Ideas4Img from '../../../components/assets/images/inspirationSources/Idea4.png'
import Ideas5Img from '../../../components/assets/images/inspirationSources/Idea5.png'
import {SectionHeader} from "../../../components/sectionHeader/SectionHeader";
import {SeeAll} from "../../../components/seeAll/SeeAll";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Ideas = () => {
    return (
        <StyledIdeas>
            <Container>
                <FlexWrapper direction={'column'}>
                    <SectionHeader>Идеи для <div>вдохновения</div></SectionHeader>
                    <ImageWrapper>
                        <img src={`${Ideas1Img}`} alt={'Idea1Photo'}></img>
                        <img src={`${Ideas2Img}`} alt={'Idea2Photo'}></img>
                        <img src={`${Ideas3Img}`} alt={'Idea3Photo'}></img>
                        <img src={`${Ideas4Img}`} alt={'Idea4Photo'}></img>
                        <img src={`${Ideas5Img}`} alt={'Idea5Photo'}></img>
                    </ImageWrapper>
                    <SeeAllIdeas text={'Смотреть еще больше фотографий'}></SeeAllIdeas>

                </FlexWrapper>
            </Container>
        </StyledIdeas>
    );
};

const StyledIdeas = styled.section`
  a > p {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    line-height: 52px;
    font-weight: 400;
    padding: 0 28px;
  }

  svg {
    fill: rgba(255, 255, 255, 1);
  }
  
  ${Container} {
    padding: 60px 0 100px;
  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 0.7fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 62px 0 66px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:first-child {
    grid-column: span 1;
    grid-row: 1/ span 2
  }

  //img:nth-child(2) {
  //  grid-column: span 1;
  //}
  //
  //img:nth-child(3) {
  //  grid-column: span 1;
  //}
  //
  //img:nth-child(4) {
  //  grid-column: span 1;
  //  grid-row: span 1;
  //}
  //
  //img:nth-child(5) {
  //  grid-column: span 1;
  //  grid-row: span 1;
  //}
`

const SeeAllIdeas = styled(SeeAll)`
  background-color: rgba(40, 85, 63, 1);
  padding: 26px 28px;
  max-width: 405px;
  align-self: flex-end;
`
