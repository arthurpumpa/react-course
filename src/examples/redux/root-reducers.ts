import { combineReducers } from 'redux';
import shopReducer, { ShopState } from './shop/shop-reducer';
import { reducer as formReducer } from 'redux-form';

export interface IAppState {
    shop: ShopState;
}

export default combineReducers({
    shop: shopReducer,
    form: formReducer
});