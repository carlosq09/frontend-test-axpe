import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './rootReducers'

export default function generateStore() {
   return createStore(rootReducer, compose( applyMiddleware(thunk)))
}