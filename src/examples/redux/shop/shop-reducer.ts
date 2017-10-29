import { Action } from 'redux';
import { ADD_PRODUCT_TO_CART, RECEIVE_PRODUCTS, REMOVE_PRODUCT_FROM_CART } from './shop-actions';

export interface Product {
    name: string;
    price: number;
}

export interface ICartItem {
    product: Product;
    count: number;
}

export interface ShopState {
    allProducts: Product[];
    cart: ICartItem[];
}

const initialState: ShopState = {
    allProducts: [],
    cart: []
};

interface ReceiveProductsAction extends Action {
    payload: Product[];
}

interface AddProductToCartAction extends Action {
    payload: Product;
}

interface RemoveProductFromCart extends Action {
    payload: string;
}

const receiveProducts = (state: ShopState, action: ReceiveProductsAction): ShopState => ({
    ...state,
    allProducts: action.payload
});

const addProductToCart = (state: ShopState, action: AddProductToCartAction): ShopState => {
    let found = false;

    const newSelectedProducts = state.cart.map(cartItem => {
        if (cartItem.product.name === action.payload.name) {
            found = true;
            return {
                product: action.payload,
                count: cartItem.count + 1
            };
        } else {
            return cartItem;
        }
    });

    if (!found) {
        newSelectedProducts.push({
            product: action.payload,
            count: 1
        });
    }

    return {
        ...state,
        cart: newSelectedProducts
    };
};

const removeProductFromCart = (state: ShopState, action: RemoveProductFromCart): ShopState => {
    const cart = state.cart.filter(cartItem => {
        if (cartItem.product.name === action.payload) {
            return false;
        } else {
            return true;
        }
    });

    return {
        ...state,
        cart: cart
    };
};

const shopReducer = (state: ShopState = initialState, action: any): ShopState => {

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return receiveProducts(state, action);
        case ADD_PRODUCT_TO_CART:
            return addProductToCart(state, action);
        case REMOVE_PRODUCT_FROM_CART:
            return removeProductFromCart(state, action);
        default:
            return state;
    }
};

export default shopReducer;