import getAllCustomers from './getAllCustomers'

import type { Customer } from './index.d'

type CreateCustomer = {
  customer: Customer
}
export default function createCustomer({ customer }: CreateCustomer) {
  const customers = getAllCustomers()

  function generateID() {
    return `CUSTOMER_${Object.keys(customers).length + 1}`
  }

  const newCustomer = {
    ...customer,
    id: generateID(),
  }

  localStorage.setItem('customers', JSON.stringify([...customers, newCustomer]))
}