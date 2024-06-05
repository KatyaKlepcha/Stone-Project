import React from 'react';
import styled from "styled-components";
import ProductImage from '../../../../components/assets/images/product.png'
import {theme} from "../../../../styles/Theme.styled";
import {CommonLink, Text} from "../../../../components/link/Link";

type ProductCardPropsType = {
    image: string
    shortName: string
    description: string
    newPrice: number
    oldPrice: number
}

export const ProductCard = () => {
    return (
        <StyledProductCard>
            <ContainerImg><ProductImg src={`${ProductImage}`} alt={'Product Card'}/></ContainerImg>
            <Description>
                <Shortly>Kratki</Shortly>
                <Product>Каминная топка Kratki ZUZIA LPT</Product>
                <PriceWrapper>
                    <Price>16 490 руб </Price>
                    <OldPrice>16 490 руб</OldPrice>
                </PriceWrapper>
            </Description>
            <LinkCard text={'Подробнее'} to={'/'}/>
        </StyledProductCard>
    );
};

const StyledProductCard = styled.div`
  width: 282px;
  padding: 14px 18px 15px 17px;
  background-color: rgba(255, 255, 255, 0.96);
  position: relative;
  box-shadow: 0 4px 47px -2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1330px) {
    width: auto;
  }
`

const ContainerImg = styled.div`
  position: relative;
  
  &::after {
    position: absolute;
    color: rgba(0, 0, 0, 1);
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.45);
    padding: 7px 19px 7px 18px;
    content: "Акция";
  }
`

const ProductImg = styled.img`
  width: 100%;
  min-width: 246px;
`

const Description = styled.div`
  padding: 26px 13px 21px;
`

const Shortly = styled.div`
  color: ${theme.colors.accent};
  margin-bottom: 4px;
`

const Product = styled.div`
  color: rgba(0, 0, 0, 1);

`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

const Price = styled.div`
  color: ${theme.colors.accent};
`

const OldPrice = styled.span`
  color: rgba(148, 153, 129, 1);
  text-decoration: line-through;
`

const LinkCard = styled(CommonLink)`
  background-color: ${theme.colors.accent};
  display: block;
  width: 100%;
  padding: 10px 77px;

  ${Text} {
    font-size: 17px;
    line-height: 20px;
    text-transform: lowercase;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`