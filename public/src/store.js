import { createStore, injectStore } from '@js-factory/onejs';
import defaultState from './appDefaultState';
import request from '@js-factory/onejs/example/middleware/request';

const reducer = () => {
    return getState => (req, next) => data => {
        const { actionConfig: { reducer, key } } = req;
        if (!reducer) {
            return next(data);
        };
        const store = getState();
        let updatedData = data;
        if (reducer) {
            updatedData = reducer.call(this, store[key], data);
        }
        return next(updatedData);
    }
};

export default (initialState) => {
    const store = createStore({
        ...defaultState,
        ...initialState
    }, [request(), reducer()]);

    injectStore(store);
    return store;
};
