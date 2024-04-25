import React from 'react';
import styled from "styled-components";
import ProductImage from '../../../../components/assets/images/product.png'

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
            <MoreDetails>Подробнее</MoreDetails>
        </StyledProductCard>
    );
};

const StyledProductCard = styled.div`
  width: 282px;
  padding: 14px 18px 15px 17px;
  background-color: rgba(255, 255, 255, 0.96);
  position: relative;
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
  
`

const Description = styled.div`
  padding: 26px 13px 21px;
`

const Shortly = styled.div`
  color: rgba(40, 85, 63, 1);
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
  color: rgba(40, 85, 63, 1);
`

const OldPrice = styled.span`
  color: rgba(148, 153, 129, 1);
  text-decoration: line-through;
`

const MoreDetails = styled.a`
  background-color: rgba(40, 85, 63, 1);
  display: block;
  width: 100%;
  padding: 10px 77px;
`