import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Landing from './containers/Landing';
import store from './state/store';
import './css/icon-fonts/arrow/arrow-styles.css';
import './css/main.scss';
import * as serviceWorker from './service-worker/serviceWorker';

const root = document.getElementById('root');
const App = () => (
    <Provider store={store} >
        <Landing />
    </Provider>
);

ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
setTimeout(() => window.scrollTo(0,0), 500);