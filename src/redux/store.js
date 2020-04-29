import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rateReducer from './rateReducer';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    rate: rateReducer,
    form: formReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store