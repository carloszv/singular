import getAllCustomers from './getAllCustomers'

import type { Customer } from './index.d'

type UpdateCustomer = {
  customerId: string
  customer: Customer
}

export default function updateCustomer({ customerId, customer }: UpdateCustomer) {
  const customers = getAllCustomers()

  const customersUpdated = customers.map((c: Customer) => {
    if (c.id === customerId) {
      return customer
    }

    return c
  })

  localStorage.setItem('customers', JSON.stringify(customersUpdated))
}