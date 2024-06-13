import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled";
import {CommonLink, Text} from "../../../../components/link/Link";
import ProductImage from "../../../../components/assets/images/product.png";

type ProductCardPropsType = {
    image?: string
    shortName?: string
    description?: string
    newPrice?: number
    oldPrice?: number
}

export const ProductCard: FC<ProductCardPropsType> =
    ({
         image = `${ProductImage}`,
         oldPrice = '10 000',
         newPrice = '9 000',
         description = 'Каминная топка Kratki ZUZIA LPT',
         shortName = 'Kratki',
     }) => {

        return (
            <StyledProductCard>
                <ContainerImg><ProductImg src={image} alt={'Product Card'}/></ContainerImg>
                <Description>
                    <Shortly>{shortName}</Shortly>
                    <Product>{description}</Product>
                    <PriceWrapper>
                        <Price>{newPrice} руб </Price>
                        <OldPrice> {oldPrice} руб</OldPrice>
                    </PriceWrapper>
                </Description>
                <LinkCard text={'Подробнее'} to={'/'}/>
            </StyledProductCard>
        );
    };

const StyledProductCard = styled.div`
  max-width: 282px;
  width: 100%;
  padding: 14px 18px 15px 17px;
  background-color: rgba(255, 255, 255, 0.96);
  position: relative;
  box-shadow: 0 4px 47px -2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1290px) {
    max-width: none;
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
  max-width: 246px;

  @media screen and (max-width: 1290px) {
    max-width: none;
  }
`

const Description = styled.div`
  padding: 26px 13px 21px;
`

const Shortly = styled.div`
  color: ${theme.colors.accent};
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
`

const Product = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
`

const Price = styled.div`
  color: ${theme.colors.accent};
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
`

const OldPrice = styled.span`
  color: rgba(148, 153, 129, 1);
  text-decoration: line-through;
  font-size: 14px;
  line-height: 16px;
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