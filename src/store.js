import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './ducks/productsReducer';
import userReducer from './ducks/userReducer';



// combineReducers brings all reducers to ONE OBJECT

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
})

// applies promiseMiddleware when doing asycn HTTP requests

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));


