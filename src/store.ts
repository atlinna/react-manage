import storeSource from "./reducers/store";
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const bin = combineReducers(storeSource)
const store = createStore(bin, applyMiddleware(thunk))

// eslint-disable-next-line import/no-anonymous-default-export
export default store