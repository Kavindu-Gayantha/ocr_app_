import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose } from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
const composeEnhanse = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
    <Provider store={createStore(
        reducers,
        composeEnhanse(applyMiddleware(reduxThunk))
        )}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
