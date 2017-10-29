import * as React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import Shop from './shop/Shop';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';
import rootReducers from './root-reducers';
import FormExample from './form/FormExample';
import logger from './logger';

const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
    )
);

const store = createStore(
    rootReducers,
    enhancer
);

class ReduxExample extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Switch>
                    <Route path="/redux/shop" component={Shop}/>
                    <Route path="/redux/form" component={FormExample}/>
                </Switch>
            </Provider>
        );
    }
}

export default ReduxExample;