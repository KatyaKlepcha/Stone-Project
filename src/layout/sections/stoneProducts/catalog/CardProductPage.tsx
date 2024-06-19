import React, {useState} from 'react';
import {Breadcrumbs, StyledBreadcrumbs} from "../../../../components/breadcrumbs/Breadcrumbs";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme.styled";
import {Button} from "../../../../components/button/Button";
import {Icon} from "../../../../components/icon/Icon";
import ProductPicture from '../../../../components/assets/images/ProductPicture.png'
import {font} from "../../../../styles/Common";
import {Name, StyledTitleDescription, TitleDescription, Wrapper} from "./titleDescription/TitleDescription";
import {Price} from "../../../../components/price/Price";
import {OrderInfo} from "./orderInfo/OrderInfo";
import {useParams} from "react-router-dom";
import {PRODUCTS} from "../../../../common/constants/Constants";
import {ErrorPage} from "../../../../components/errorPage/ErrorPage";

export const CardProductPage = () => {

    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenCharacteristics, setIsOpenCharacteristics] = useState(false)

    const {id} = useParams();

    const selectProduct = PRODUCTS.find(product => product.id === (id && +id))

    const discount = selectProduct && (Math.round((selectProduct.oldPrice-selectProduct.newPrice) / selectProduct.oldPrice * 100))
    console.log('discount', discount)
    const onClickDescriptionHandler = () => {
        setIsOpenDescription(!isOpenDescription)
    }

    const onClickCharacteristicsHandler = () => {
        setIsOpenCharacteristics(!isOpenCharacteristics)
    }

    if (!selectProduct) {
        return <ErrorPage/>;
    }

    return (
        <CardProductPageWrapper>
            <Container>
                <FlexWrapper direction={'column'}>
                    <Breadcrumbs/>
                    <Designation>
                        <ProductTitle>{selectProduct.description}</ProductTitle>
                        <ModelBlock>
                            <div>Модель: <span>{selectProduct.model}</span></div>
                            <div>Артикул: <span>{selectProduct.article}</span></div>
                        </ModelBlock>
                    </Designation>
                    <ProductBlock>
                        <Picture src={`${ProductPicture}`}/>
                        <CharacteristicsContainer>
                            <StockWrapper>
                                <Icon iconId={'stockIcon'} width={'25'} height={'25'}/>
                                <Stock>В наличии</Stock>
                            </StockWrapper>
                            <PriceBlock>
                                <PriceWrapper>
                                    <Price price={selectProduct.newPrice} weight={600} size={'36px'}/>
                                    <Price price={selectProduct.oldPrice} isOldPrice={true} size={'27px'}
                                           color={'rgba(156, 156, 156, 1)'}/>
                                </PriceWrapper>
                                <Discount>-{discount}%</Discount>
                            </PriceBlock>
                            <IncludingTax>Цена указана с учетом НДС</IncludingTax>
                            <Numbers>Количество: </Numbers>
                            <TitleDescription name={"Характеристики"} isOpen={isOpenCharacteristics}
                                              onClickHandler={onClickCharacteristicsHandler}/>
                            {isOpenCharacteristics && <Characteristics>
                                <div>Вид камня <span>{selectProduct.stoneType}</span></div>
                                <div>Изделие <span>{selectProduct.size}</span></div>
                                <div>Месторождение <span>{selectProduct.field}</span></div>
                                <div>Цвет <span>{selectProduct.color}</span></div>
                            </Characteristics>}
                            <ButtonWrapper>
                                <Button name={'Консультация бесплатно'}/>
                                <Button name={'Оставить заявку'} background={'transparent'}
                                        color={`${theme.colors.accent}`} border={'rgba(202, 202, 202, 1)'}/>
                            </ButtonWrapper>
                        </CharacteristicsContainer>
                    </ProductBlock>
                    <DescriptionBlock>
                        <DescriptionTitleWrapper>
                            <TitleDescription name={'Описание'} onClickHandler={onClickDescriptionHandler}
                                              isOpen={isOpenDescription}/>
                            {isOpenDescription &&
                                <Description>Клиент очень важен, за клиентом последует клиентx
                                    zXZXNZBXmzNBXmnzBmbxcnzsvcnbxzvcbn. </Description>}
                        </DescriptionTitleWrapper>
                    </DescriptionBlock>
                    <OrderBlock>
                        <OrderInfo title={'Оплата'}
                                   text={'Возможны любые виды оплаты. Безналичный расчет для юридических и физических лиц'}/>
                        <OrderInfo title={'Доставка'}
                                   text={'Стоимость доставки зависит от месторождения камня и соответствует действующим тарифам на грузоперевозки авто и ж/д транспорта. Уточняйте у менеджеров.'}/>
                        <OrderInfo title={'Гарантия качества'}
                                   text={'Вся гарантийная продукция соответствует ГОСТам 32018-2012,23342-2012,9480-2012. Это характеризует наш гранит как продукцию высочайшего качества.'}/>
                    </OrderBlock>
                </FlexWrapper>
            </Container>
        </CardProductPageWrapper>
    );
};


const CardProductPageWrapper = styled.div`
  padding-top: 200px;
  
  ${Container} {
    padding: 0 20px 98px;
  }

  ${StyledBreadcrumbs} {
    border-top: 1px solid rgba(229, 229, 229, 1);
    padding: 24px 0 28px;
  }
`

const Designation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(229, 229, 229, 1);
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  padding: 20px 0;
`

const ProductTitle = styled.h3`
  text-transform: uppercase;
  ${font({lineHeight: '52px', Fmax: 40, Fmin: 25, color: 'rgba(40, 42, 48, 1)'})}
`

const ModelBlock = styled.div`
  color: ${theme.colors.accent};

  div {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: ${theme.colors.accent}
  }

  span {
    font-weight: 400;
    color: rgba(156, 156, 156, 1);
  }
`

const ProductBlock = styled.div`
  display: flex;
  gap: 35px;
  margin: 25px 0 75px;
`

const Picture = styled.img`
  width: 602px;
  height: 408px;
`

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(40, 42, 48, 1)
`

const Characteristics = styled.div`
  margin-top: 15px;

  div {
    padding: 14px 0 12px 12px;

    &:nth-child(odd) {
      background-color: rgba(249, 249, 249, 1);
    }
  }
`

const StockWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`

const Stock = styled.span`
  color: ${theme.colors.accent};
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  margin-left: 8px;
`

const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div:first-child {
    margin-right: 14px;
  }
`

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Discount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 40px;
  background-color: ${theme.colors.accent};
  color: rgba(255, 255, 255, 1);
  margin-left: 26px;
  box-shadow: 0 0 47px 3px rgba(0, 0, 0, 0.1);
`

const IncludingTax = styled.div`
  margin-bottom: 45px;
  ${font({lineHeight: '14px', Fmax: 14, Fmin: 12, weight: 500, color: 'rgba(156, 156, 156, 1)'})}
`

const Numbers = styled.div`
  margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;

  button {
    text-transform: lowercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 16px 10px;
    white-space: nowrap;
    box-shadow: 0 0 47px 3px rgba(0, 0, 0, 0.1);

    &:first-letter {
      text-transform: uppercase;
    }
  }
`

const DescriptionBlock = styled.div`
  color: rgba(0, 0, 0, 1);

  ${Name} {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
`

const DescriptionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledTitleDescription} {
    border-bottom: 4px solid rgba(237, 243, 243, 1);
  }

  ${Wrapper} {
    padding: 0 0 28px;
    position: relative;
    width: max-content;


    &::after {
      position: absolute;
      content: '';
      background-color: ${theme.colors.accent};
      height: 4px;
      width: 100%;
      bottom: -4px;
      left: 0;
    }
  }
`

const Description = styled.p`
  margin-top: 20px;
`

const OrderBlock = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 1);
`
