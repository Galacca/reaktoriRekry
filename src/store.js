import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import packageReducer from './reducers/packageReducer';

const reducer = combineReducers({ packages: packageReducer });
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
