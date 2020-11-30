import { Customer } from './index.d'

export default function getCustomerById(id: string): Customer|undefined {
  const customers = localStorage.getItem('customers')

  if (customers) {
        const customersJson = JSON.parse(customers)
        return customersJson.find((customer: Customer) => customer.id === id)
  }

  return undefined
}