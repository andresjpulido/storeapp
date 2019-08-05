import thunk from 'redux-thunk'
import { getAllProducts } from './actions'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import employee, * as fromEmployee from './reducers/employeeReducer'
import hour from './reducers/hourReducer'
import inventory from './reducers/inventoryReducer'
import order from './reducers/orderReducer'
import payslip from './reducers/payslipReducer'

const middleware = [thunk];

const reducer = combineReducers({
    employee, 
    hour,
    inventory,
    order,
    payslip
})

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store;