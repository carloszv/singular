import defaultCustomers from './defaultCustomers.json'
import { Customer } from './index.d'

export default function getAllCustomers(): Customer[] {
  const customers = localStorage.getItem('customers')

  if (customers) {
    return JSON.parse(customers)
  }

  localStorage.setItem('customers', JSON.stringify(defaultCustomers))

  return defaultCustomers
}