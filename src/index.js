import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Counter from './Counter'


const store = createStore(
    reducer,
    applyMiddleware()
)

ReactDOM.render(<Provider store={store}>
    <Counter />
</Provider>, document.getElementById('root'));

registerServiceWorker();
