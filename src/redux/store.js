import thunk from 'redux-thunk'
import { getAllProducts } from './actions'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import employeeReducer, * as fromEmployee from './reducers/employeeReducer'
import hourReducer from './reducers/hourReducer'
import inventory from './reducers/inventoryReducer'
import orderReducer from './reducers/orderReducer'
import payslipReducer from './reducers/payslipReducer'
import authReducer from './reducers/authReducer'
import inventoryReducer from './reducers/inventoryReducer'
import operationReducer from './reducers/operationReducer'
import productTypeReducer from './reducers/productTypeReducer'
import sizeReducer from './reducers/sizeReducer'
import errorReducer from './reducers/errorReducer'
import movementsReducer from './reducers/movementsReducer'
import parameterReducer from './reducers/parameterReducer'

const rootReducer = combineReducers({
    employeeReducer, 
    hourReducer,
    inventory,
    orderReducer,
    payslipReducer,
    authReducer,
    inventoryReducer,
    operationReducer,
    productTypeReducer,
    sizeReducer,
    errorReducer,
    movementsReducer,
    parameterReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;