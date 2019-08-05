//mock api services
import _products from './products.json'
import _employees from './employees.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getActiveEmployees: (cb, timeout) => setTimeout(() => cb(_employees), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
