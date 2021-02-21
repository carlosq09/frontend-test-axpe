import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevtools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'; // no changes here 😀
import rootReducer from './reducers/rootReducers'

export default function generateStore() {
   return createStore(rootReducer, compose( applyMiddleware(thunk)))
}