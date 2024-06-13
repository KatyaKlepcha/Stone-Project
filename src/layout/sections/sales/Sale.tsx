import React from 'react';
import {ProductCard} from "./productCard/ProductCard";
import styled from "styled-components";
import {SectionHeader, TitleSectionHeader} from "../../../components/sectionHeader/SectionHeader";
import SaleBgImage from "../../../components/assets/images/shells.png"
import {CommonLink, Text} from "../../../components/link/Link";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";
import {Slider} from "../../../components/slider/Slider";
import ArrowGray from '../../../components/assets/images/arrowGray.svg';
import {ProductCardContainer} from "./productCard/ProductCardContainer";

const items = [<ProductCard/>, <ProductCard/>, <ProductCard/>, <ProductCard/>]

export const Sale = () => {
    return (
        <StyledShells>
            <Container>
                <FlexWrapper direction={'column'} align={'flex-end'}>
                    <Block>
                        <CurrentSalesWrapper>
                            <SectionHeader>Актуальные акции <div>на <span>нашу продукцию</span></div>
                            </SectionHeader>
                            <SaleText>Учитывая ключевые сценарии поведения, обучения кадров влечет за собой процесс
                                внедрения и
                                модернизации
                                распределения</SaleText>
                            <LinkSale text={'перейти в каталог'} to={'/catalog'}/>
                        </CurrentSalesWrapper>
                        <CardBlock>
                            <CommonLinkSale text={'смотреть все'} isIcon={true} to={'/catalog'}/>
                            <ProductCardWrapper>
                                <ProductCardContainer/>
                            </ProductCardWrapper>
                            <SliderSale items={items}/>
                        </CardBlock>
                    </Block>
                </FlexWrapper>
            </Container>
        </StyledShells>
    );
};

const StyledShells = styled.section`
  background-image: url(${SaleBgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 120px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
    rgba(0, 0, 0, 0.8) 36.74%,
    rgba(0, 0, 0, 0.21) 100%);
    z-index: 2;
  }

  ${Container} {
    padding: 58px 0 50px;
  }

  ${FlexWrapper} {
    position: relative;
    z-index: 3;
  }

  @media screen and (max-width: 1290px) {
    ${FlexWrapper} {
      align-items: normal;
    }

    ${Container} {
      padding: 70px 0 46px;
    }
  }
`

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`

const CurrentSalesWrapper = styled.div`
  background: linear-gradient(180deg,
  rgba(0, 0, 0, 0.87) 62.37%,
  rgba(0, 0, 0, 0.2436) 100%);
  padding: 50px 18px 48px 103px;
  position: absolute;
  left: -85px;
  top: 260px;
  max-width: 708px;

  div > div {
    color: ${theme.colors.accent};
  }

  ${TitleSectionHeader}, div {
    color: ${theme.colors.font};

    span {
      color: ${theme.colors.accent};
    }
  }

  @media screen and (max-width: 1290px) {
    position: static;
    max-width: 100%;
    padding: 33px 21px;
  }

  @media ${theme.media.tablet} {
    ${TitleSectionHeader} {
      font-size: 27px;
      line-height: 30px
    }
  }
`

const LinkSale = styled(CommonLink)`
  justify-content: center;
  background-color: ${theme.colors.accent};
  padding: 21px 40px;
  max-width: 238px;
  width: 100%;

  ${Text} {
    font-size: 15px;
    line-height: 18px;
  }

  @media screen and (max-width: 1290px) {
    max-width: 100%;
  }
`

const SaleText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  margin: 34px 0 40px;

  @media ${theme.media.tablet} {
    font-size: 17px;
    line-height: 20px;
  }
`

const CardBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1290px) {
    padding: 0 21px;
  }
`

const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 28px;
  grid-column-gap: 38px;

  @media screen and (max-width: 1290px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    justify-items: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const CommonLinkSale = styled(CommonLink)`
  margin-bottom: 20px;
  justify-content: flex-end;

  @media screen and (max-width: 1290px) {
    margin: 20px 0 30px;
  }
`

const SliderSale = styled(Slider)`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
    align-self: center;
    max-width: 320px;

    .alice-carousel__next-btn-item, .alice-carousel__prev-btn-item {
      background-color: rgba(229, 229, 229, 1);
      position: absolute;
      top: 210px;
      border-radius: 5px;

      [data-area] {
        &::after {
          content: url(${ArrowGray});
        }
      }
    }

    .alice-carousel__next-btn-item {
      right: -20px;
    }

    .alice-carousel__prev-btn-item {
      left: -20px;
    }
  }
`