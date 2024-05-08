import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionHeader} from "../../../../components/sectionHeader/SectionHeader";
import {ProductCard} from "../../sales/productCard/ProductCard";
import {theme} from "../../../../styles/Theme.styled";

export const Catalog = () => {
    return (
        <StyledCatalog>
            <Container>
                <FlexWrapper direction={'column'}>
                    <SectionHeader>Изделия из <span>натурального камня</span></SectionHeader>
                    <SortBlock>
                        <div>Главная `&gt;` Каталог товаров</div>
                        <div>
                            <div>Сортировать: по актуальности</div>
                            <div>Показывать: по 9</div>
                        </div>
                    </SortBlock>
                    <Wrapper>
                        <SelectStone>
                            <div>Вид камня</div>
                            <div>Изделие</div>
                            <div>Месторождение</div>
                            <div>Цвет</div>
                        </SelectStone>
                        <ProductWrapper>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </ProductWrapper>
                    </Wrapper>
                </FlexWrapper>
            </Container>
        </StyledCatalog>
    );
};


const StyledCatalog = styled.div`
  padding-top: 140px;
    
    ${Container} {
      padding: 54px 0 59px ;
    }
`

const SortBlock = styled.div`
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  border-top: 1px solid rgba(229, 229, 229, 1);
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
`

const SelectStone = styled.div`
  background-color: rgba(249, 249, 249, 1);
  color: ${theme.colors.accent};
`

const ProductWrapper = styled.div`
  display: grid;
  grid-row-gap: 54px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`