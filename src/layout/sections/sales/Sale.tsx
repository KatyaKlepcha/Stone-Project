import React from 'react';
import {Button} from "../../../components/button/Button";
import {ProductCard} from "./productCard/ProductCard";
import styled from "styled-components";
import {SectionHeader, TitleSectionHeader} from "../../../components/sectionHeader/SectionHeader";
import SaleBgImage from "../../../components/assets/images/shells.png"
import {SeeAll} from "../../../components/seeAll/SeeAll";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Sale = () => {
    return (
        <StyledShells>
            <Container>
                <FlexWrapper direction={'column'} align={'flex-end'}>
                        <SeeAll text={'смотреть все'}/>
                        <Block>
                            <CurrentSalesWrapper>
                                <SectionHeader>Актуальные акции <div>на <span>нашу продукцию</span></div>
                                </SectionHeader>
                                <SaleText>Учитывая ключевые сценарии поведения, обучения кадров влечет за собой процесс
                                    внедрения и
                                    модернизации
                                    распределения</SaleText>
                                <Button name={'перейти в каталог'}></Button>
                            </CurrentSalesWrapper>
                            <ProductCardWrapper>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                            </ProductCardWrapper>
                        </Block>
                </FlexWrapper>
            </Container>
        </StyledShells>
    )
        ;
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

`

const Block = styled.div`
  display: flex;
  align-items: center;
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
    color: rgba(40, 85, 63, 1);
  }

  ${TitleSectionHeader}, div {
    color: rgba(255, 255, 255, 1);

    span {
      color: rgba(40, 85, 63, 1);
    }
  }
`

const SaleText = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  margin: 34px 0 40px;
`

const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 28px;
  grid-column-gap: 38px;
`