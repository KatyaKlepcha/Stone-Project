import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {RightIcon, SliderButton} from "../../../components/slider/Slider";
import styled from "styled-components";
import Countertops from '../../../components/assets/images/countertops.png'
import WindowSills from '../../../components/assets/images/windowSills.png'
import Shells from '../../../components/assets/images/shells.png'
import Panel from '../../../components/assets/images/panel.png'
import {SectionHeader, TitleSectionHeader} from "../../../components/sectionHeader/SectionHeader";
import {SeeAll, StyledSeeAll} from "../../../components/seeAll/SeeAll";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const StoneProducts = () => {
    return (
        <StyledStoneProducts>
            <Container>
                <FlexWrapper direction={'column'}>
                    <TitleBlock>
                        <HeaderWrapper>
                            <SectionHeader>Изделия
                                <div>из <span>натурального камня</span></div></SectionHeader>
                            <ContainerBtn>
                                <Button><Icon iconId='arrow' width={'16.67'} height={'16.67'}/></Button>
                                <Button><RightIcon iconId='arrow' width={'16.67'} height={'16.67'}/></Button>
                            </ContainerBtn>
                        </HeaderWrapper>
                        <SeeAll text={'смотреть все'}/>
                    </TitleBlock>
                    <Grid>
                        <PictureContainer><StyledCountertops src={`${Countertops}`} alt={'Cтолешницы'}/>
                            <Signature>Cтолешницы</Signature>
                        </PictureContainer>
                        <PictureContainer><StyledWindowSills src={`${WindowSills}`} alt={'Подоконники'}/>
                            <Signature>Подоконники</Signature>
                        </PictureContainer>
                        <PictureContainer>
                            <StyledSink src={`${Shells}`} alt={'Раковины'}/>
                            <Signature>Раковины</Signature>
                        </PictureContainer>
                        <PictureContainer>
                            <StyledPanel src={`${Panel}`} alt={'Панно'}/>
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
  }
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${StyledSeeAll} {
    margin-top: 60px;
    align-self: flex-end;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  color: rgba(40, 42, 48, 1)
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${TitleSectionHeader} {

    div {
      color: rgba(40, 42, 48, 1);
      
      span {
        color: rgba(40, 85, 63, 1);
      }
    }
  }
`

const ContainerBtn = styled.div`
  align-self: flex-end;
`

const Button = styled(SliderButton)`
  border: 1px solid rgba(229, 229, 229, 1);

  svg {
    fill: rgba(177, 177, 177, 1);
  }
`

const PictureContainer = styled.div`
  position: relative;

  &:first-child {
    grid-column: span 1;
  }

  &:nth-child(2) {
    grid-column: span 2;
  }

  &:nth-child(3) {
    grid-column: span 2;
  }

  &:nth-child(4) {
    grid-column: span 1;
  }
`

const Signature = styled.div`
  position: absolute;
  bottom: 18px;
  text-transform: uppercase;
  background: linear-gradient(177.34deg, rgba(0, 0, 0, 0.87) 2.22%, rgba(0, 0, 0, 0.5481) 97.78%);
  color: rgba(255, 255, 255, 1);
  padding: 11px 140px;
  max-width: 470px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
`



const StyledCountertops = styled.img`


`

const StyledWindowSills = styled.img`

`

const StyledSink = styled.img`

`
const StyledPanel = styled.img`

`


