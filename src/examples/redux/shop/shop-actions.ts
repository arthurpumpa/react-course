import { Dispatch } from 'react-redux';
import mockFetchProducts from '../../homeworks/fetchProducts';
import { Product } from './shop-reducer';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const START_FETCHING_PRODUCTS = 'START_FETCHING_PRODUCTS';

export const receiveProducts = (products: Product[]) => {
    return {
        type: RECEIVE_PRODUCTS,
        payload: products
    };
};

export const addProductToCart = (product: Product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    };
};

export const removeProductFromCart = (name: string) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: name
    };
};

export const startFetchingProducts = () => {
    return {
        type: START_FETCHING_PRODUCTS
    };
};

export const fetchProducts = () => {
    return (dispatch: Dispatch<{}>) => {
        dispatch(startFetchingProducts());

        return mockFetchProducts()
            .then((products: Product[]) => dispatch(receiveProducts(products)));
    };
};