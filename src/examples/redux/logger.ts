import { Dispatch, Middleware } from 'redux';

const logger: Middleware = (store: any) => {
    return (next: Dispatch<any>) => {
        return (action: any) => {
            // console.log('dispatching', action);
            const result = next(action);
            // console.log('next state', store.getState());
            return result;
        };
    };
};

export default logger;