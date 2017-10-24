import * as React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import shopReducer from './shop-reducer';
import Shop from './Shop';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  :
    compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
    shopReducer,
    enhancer
);

class ReduxShopExample extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Shop/>
            </Provider>
        );
    }
}

export default ReduxShopExample;