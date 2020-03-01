import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { promiseReducer } from './reducers/promiseReducer'
import { loginReducer} from './reducers/loginReducer'
import { actionLogin } from './actions'
import { synchroReducer } from './reducers/synchro'

const reducers = combineReducers({
	token: loginReducer,
	promise: promiseReducer,
	synchro: synchroReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
if (localStorage.authToken) {
	store.dispatch(actionLogin(localStorage.authToken))
}

store.subscribe(() => console.log(store.getState()))

export default store
