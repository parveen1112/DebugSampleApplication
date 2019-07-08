import { h } from 'preact';
import createStore from './store';
import App from './app';

const store = createStore({});

const Server = (req, props = {}, data = {}) => {
    store.setState({ ...props, ...data });
    return <App {...props} />;
};

export default Server;
