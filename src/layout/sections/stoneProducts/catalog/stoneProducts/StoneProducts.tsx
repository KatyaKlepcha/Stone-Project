import React from 'react';
import styled from "styled-components";
import Countertops from '../../../../../components/assets/images/Countertops.png'
import WindowSills from '../../../../../components/assets/images/windowSills.png'
import Shells from '../../../../../components/assets/images/shells.png'
import Panel from '../../../../../components/assets/images/panel.png'
import {SectionHeader, TitleSectionHeader} from "../../../../../components/sectionHeader/SectionHeader";
import {CommonLink, StyledLink} from "../../../../../components/link/Link";
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {theme} from "../../../../../styles/Theme.styled";
import {font} from "../../../../../styles/Common";


export const StoneProducts = () => {
    return (
        <StyledStoneProducts>
            <Container>
                <FlexWrapper direction={'column'}>
                    <TitleBlock>
                        <HeaderWrapper>
                            <SectionHeader>Изделия
                                <div>из <span>натурального камня</span></div></SectionHeader>
                        </HeaderWrapper>
                        <CommonLink to={'/catalog'} text={'смотреть все'} color={'rgba(40, 42, 48, 1)'} isIcon={true}/>
                    </TitleBlock>
                    <Grid>
                        <PictureContainer><img src={`${Countertops}`} alt={'Cтолешницы'}/>
                            <Signature>Cтолешницы</Signature>
                        </PictureContainer>
                        <PictureContainer><img src={`${WindowSills}`} alt={'Подоконники'}/>
                            <Signature>Подоконники</Signature>
                        </PictureContainer>
                        <PictureContainer>
                            <img src={`${Shells}`} alt={'Раковины'}/>
                            <Signature>Раковины</Signature>
                        </PictureContainer>
                        <PictureContainer>
                            <img src={`${Panel}`} alt={'Панно'}/>
                            <Signature>Панно</Signature>
                        </PictureContainer>
                    </Grid>
                </FlexWrapper>
            </Container>
        </StyledStoneProducts>
    );
};

const StyledStoneProducts = styled.div`
  background: rgba(223, 223, 223, 0.18);
  
  ${Container} {
    padding: 60px 0 112px;

    @media screen and (max-width: 1330px) {
      padding: 50px 18px 50px 35px;
    }
  }
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledLink} {
    margin: 58px 0 40px;
    align-self: flex-end;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${TitleSectionHeader} {
    ${font({lineHeight: '46px', Fmax: 40, Fmin: 24, color: 'rgba(40, 42, 48, 1)'})}
    
    span {
      color: ${theme.colors.accent};
    }
  }

  @media ${theme.media.tablet} {
    ${TitleSectionHeader} {
      line-height: 28px;
    }
  }
`

const PictureContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:first-child {
    grid-column: 1/5;
  }

  &:nth-child(2) {
    grid-column: 5/11;
  }

  &:nth-child(3) {
    grid-column: 1/7;
  }

  &:nth-child(4) {
    grid-column: 7/11;
  }
`

const Signature = styled.div`
  position: absolute;
  bottom: 18px;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(177.34deg, rgba(0, 0, 0, 0.87) 2.22%, rgba(0, 0, 0, 0.5481) 97.78%);
  color: ${theme.colors.font};
  padding: 11px 0;
  max-width: 470px;
  width: 100%;
  ${font({lineHeight: '36px', Fmax: 24, Fmin: 22})}

  @media ${theme.media.tablet} {
    max-width: 100%;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 340px);
  grid-gap: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${PictureContainer} {
    &:nth-child(odd) {
      ${Signature} {
        left: 0
      }
    }
    &:nth-child(even){
      ${Signature} {
        right: 0
      }
    }
  }

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;

    ${PictureContainer}{
      grid-column: unset;
    }
  }
`


