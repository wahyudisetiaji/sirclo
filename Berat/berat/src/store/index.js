// import {applyMiddleware, createStore} from 'redux'
// import ReduxThunk from 'redux-thunk'
// import rootReducer from './reducers'

// let initState = { }
// const middleware = [ReduxThunk]
// const store = createStore(rootReducer,initState,applyMiddleware(...middleware))

// export default store

import getAllBerat from '../store/reducers/getAllBerat'
import getOneBerat from '../store/reducers/getOneBerat'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootReducers = combineReducers ({
    getAllBerat,
    getOneBerat
})

const store = createStore(rootReducers, applyMiddleware(thunk)
);

export default store