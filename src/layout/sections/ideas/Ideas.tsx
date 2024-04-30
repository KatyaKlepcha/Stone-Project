import React from 'react';
import Ideas1Img from '../../../components/assets/images/inspirationSources/Idea1.png'
import Ideas2Img from '../../../components/assets/images/inspirationSources/Idea2.png'
import Ideas3Img from '../../../components/assets/images/inspirationSources/Idea3.png'
import Ideas4Img from '../../../components/assets/images/inspirationSources/Idea4.png'
import Ideas5Img from '../../../components/assets/images/inspirationSources/Idea5.png'
import {SectionHeader} from "../../../components/sectionHeader/SectionHeader";
import {Link, Text} from "../../../components/link/Link";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";

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
                    <LinkIdeas text={'Смотреть еще больше фотографий'} isIcon={true}/>

                </FlexWrapper>
            </Container>
        </StyledIdeas>
    );
};

const StyledIdeas = styled.section`
  a > p {
    color: ${theme.colors.font};
    font-size: 18px;
    line-height: 52px;
    font-weight: 400;
    padding: 0 28px;
  }

  svg {
    fill: ${theme.colors.font};
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
`

const LinkIdeas = styled(Link)`
  background-color: ${theme.colors.accent};
  padding: 0 28px;
  align-self: flex-end;
  
  ${Text} {
    text-transform: lowercase;
    padding: 0;
    
    &:first-letter {
      text-transform: uppercase;
    }
  }
`
