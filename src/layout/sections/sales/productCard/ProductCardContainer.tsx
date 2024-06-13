import React from 'react';
import {ProductCard} from "./ProductCard";
import ProductImage from '../../../../components/assets/images/product.png'

export const ProductCardContainer = () => {
    return (
        <>
            <ProductCard shortName={'Kratki'} description={'Каминная топка Kratki ZUZIA LPT'}
                         oldPrice={14900} newPrice={13900} image={`${ProductImage}`}/>
            <ProductCard shortName={'Kratki'} description={'Каминная топка Kratki ZUZIA LPT'}
                         oldPrice={15900} newPrice={14900} image={`${ProductImage}`}/>
            <ProductCard shortName={'Kratki'} description={'Каминная топка Kratki ZUZIA LPT'}
                         oldPrice={16900} newPrice={15900} image={`${ProductImage}`}/>
            <ProductCard shortName={'Kratki'} description={'Каминная топка Kratki ZUZIA LPT'}
                         oldPrice={17900} newPrice={16900} image={`${ProductImage}`}/>
        </>
    );
};