import thunk from 'redux-thunk'
import { getAllProducts } from './actions'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import employeeReducer, * as fromEmployee from './reducers/employeeReducer'
import hourReducer from './reducers/hourReducer'
import inventory from './reducers/inventoryReducer'
import order from './reducers/orderReducer'
import payslipReducer from './reducers/payslipReducer'
import authReducer from './reducers/authReducer'
 
const rootReducer = combineReducers({
    employeeReducer, 
    hourReducer,
    inventory,
    order,
    payslipReducer,
    authReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;