import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionHeader, TitleSectionHeader} from "../../../../components/sectionHeader/SectionHeader";
import {theme} from "../../../../styles/Theme.styled";
import {Breadcrumbs, StyledBreadcrumbs} from "../../../../components/breadcrumbs/Breadcrumbs";
import {Icon} from "../../../../components/icon/Icon";
import {CommonLink} from "../../../../components/link/Link";
import {font} from "../../../../styles/Common";
import {PRODUCTS} from "../../../../common/constants/Constants";
import {ProductCard} from "../../sales/productCard/ProductCard";

export const Catalog = () => {

    const productsCard = PRODUCTS.map(product => {
        return <ProductCard id={product.id} description={product.description} oldPrice={product.oldPrice}
                            newPrice={product.newPrice} shortName={product.shortName}/>
    })
    return (
        <StyledCatalog>
            <Container>
                <FlexWrapper direction={'column'}>
                    <SectionHeader>Изделия из <span>натурального камня</span></SectionHeader>
                    <SortBlock>
                        <Breadcrumbs/>
                        <Sort>
                            <div>Сортировать: <span>по актуальности</span></div>
                            <div>Показывать: <span>по 9</span></div>
                        </Sort>
                    </SortBlock>
                    <Wrapper>
                        <SelectStoneBlock>
                            <SelectStone>
                                <div>
                                    Вид камня
                                    <Icon iconId={'arrow'}/>
                                </div>
                                <div>
                                    Изделие
                                    <Icon iconId={'arrow'}/>
                                </div>
                                <div>
                                    Месторождение
                                    <Icon iconId={'arrow'}/>
                                </div>
                                <div>
                                    Цвет
                                    <Icon iconId={'arrow'}/>
                                </div>
                            </SelectStone>
                        </SelectStoneBlock>
                        <ProductWrapper>
                            {productsCard}
                        </ProductWrapper>
                        <CommonLink to={'/catalog'} text={'показать ещё'} color={'rgba(40, 42, 48, 1)'} isIcon={true}/>
                    </Wrapper>
                </FlexWrapper>
            </Container>
        </StyledCatalog>
    );
};


const StyledCatalog = styled.div`
  padding-top: 140px;

  ${Container} {
    padding: 54px 0 59px;
  }

  ${TitleSectionHeader} {
    ${font({lineHeight: '46px', Fmax: 40, Fmin: 24, color: 'rgba(40, 42, 48, 1)'})}
  }

  @media screen and (max-width: 1330px) {
    ${Container} {
      padding: 0 20px 0;
    }
  }

  @media ${theme.media.tablet} {
    ${Container} {
      padding: 0 23px 52px;
    }

    ${TitleSectionHeader} {
      line-height: 28px;
    }
  }
`

const SortBlock = styled.div`
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  border-top: 1px solid rgba(229, 229, 229, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0 28px;
  margin: 18px 0 50px;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    border: none;
    padding: 0;
    margin: 0;

    ${StyledBreadcrumbs} {
      width: 100%;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      border-top: 1px solid rgba(229, 229, 229, 1);
      padding: 9px 0 16px;
      margin-top: 25px;
    }
  }
`

const Sort = styled.div`
  display: flex;
  gap: 36px;

  div {
    color: rgba(156, 156, 156, 1);

    span {
      color: ${theme.colors.accent}
    }
  }

  @media ${theme.media.tablet} {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    margin: 24px 0 16px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-column-gap: 30px;

  a {
    margin-top: 30px;
    justify-self: end;
    grid-column: 2 / 2;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;

    a {
      grid-column: unset;
    }
  }
`

const SelectStoneBlock = styled.div`
  background-color: rgba(249, 249, 249, 1);
  color: ${theme.colors.accent};
`

const SelectStone = styled.div`
  div {
    padding: 10px 12px 10px 15px;
    display: flex;
    justify-content: space-between;

    svg {
      width: 10px;
      height: 20px;
      fill: ${theme.colors.accent};
      transform: rotate(-90deg);
    }
  }

  div:not(:last-child) {
    border-bottom: 1px solid rgba(229, 229, 229, 1);
  }

`

const ProductWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 54px;
  grid-column-gap: 38px;
  grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));

  @media ${theme.media.tablet} {
    margin: 55px 0 28px;
    grid-row-gap: 20px;
  }
`

