import { createStore } from 'redux'
import { cReducer } from './reducers/gitpro'

const store = createStore(cReducer)

export default store
