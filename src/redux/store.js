import thunk from 'redux-thunk'
import { getAllProducts } from './actions'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import employeeReducer, * as fromEmployee from './reducers/employeeReducer'
import hour from './reducers/hourReducer'
import inventory from './reducers/inventoryReducer'
import order from './reducers/orderReducer'
import payslipReducer from './reducers/payslipReducer'
 
const rootReducer = combineReducers({
    employeeReducer, 
    hour,
    inventory,
    order,
    payslipReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;