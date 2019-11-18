import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import packageReducer from './reducers/packageReducer';

const reducer = combineReducers({ packages: packageReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
