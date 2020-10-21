import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducer.js'

//导出一个方法，让服务端每次都创建一个新的store
export default function initializeStore() {
    const store = createStore(
        combineReducers(countReducer),
        {
            count: 5,
            name: 'tao',
        },
        applyMiddleware(thunk)
    )
    return store
}

// export default createStore(
//     combineReducers(countReducer),
//     {
//         count: 5,
//         name: 'tao',
//     },
//     applyMiddleware(thunk)
// )
