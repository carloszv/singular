import createCustomer from './createCustomer'
import getAllCustomers from './getAllCustomers'
import geCustomerById from './getCustomerById'
import updateCustomer from './updateCustomer'

export type { Customer } from './index.d'

export default {
  createCustomer,
  getAllCustomers,
  geCustomerById,
  updateCustomer,
}