import {combineReducers} from 'redux'

import setPageReducer from './page-reducer'

var reducers = combineReducers({
    pageState: setPageReducer,
})

export default reducers