import { h, render } from 'preact';
import createStore from './store';
import App from './app';

const { PRELOADED_STATE = {} } = window;
const parsedState = PRELOADED_STATE;

createStore({ ...parsedState });

render(
    <App location={location} />,
    document.body,
    document.getElementById('app-root')
);
