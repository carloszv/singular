/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ChangeEvent, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'

import { useAuth } from 'contexts/auth-context'
import getAllCustomers from 'services/localStorage/getAllCustomers'
import getCustomerById from 'services/localStorage/getCustomerById'
import ModalPopup from 'components/elements/ModalPopup/ModalPopup'

import { SearchBoxWrapper, SearchBox } from './styles'

export default function Home() {
  const auth = useAuth()
  const history = useHistory()
  const allCustomers = getAllCustomers()

  const [state, setState] = useState({
    customers: allCustomers,
    searchBox: '',
    showModal: false,
    selectedCustomer: {
      id: '',
      name: '',
      projects: [
        {
          name: '',
          location: '',
          investment: '',
        },
      ],
    },
  })

  function setShow(value: boolean) {
    setState((previousState) => ({ ...previousState, showModal: value }))
  }

  function selectCustomer(e: MouseEvent) {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('id')
    const target = getCustomerById(targetId ? targetId : '')
    if (target) {
      setState((previousState) => ({ ...previousState, selectedCustomer: target }))
      setShow(true)
    }
  }

  function search(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const value = e.target.value

    setState((previousState) => ({ ...previousState, searchBox: value }))

    if (value.length === 0) {
      setState((previousState) => ({ ...previousState, customers: allCustomers }))
    } else {
      setState((previousState) => ({
        ...previousState,
        customers: state.customers.filter((customer) => customer.name.toLowerCase().includes(value)),
      }))
    }
  }

  function handleNewCustomer(e: MouseEvent) {
    e.preventDefault()

    const newCustomer = {
      id: '',
      name: '',
      projects: [
        {
          name: '',
          location: '',
          investment: '',
        },
        {
          name: '',
          location: '',
          investment: '',
        },
      ],
    }

    setState((previousState) => ({ ...previousState, selectedCustomer: newCustomer }))
    setShow(true)
  }

  useEffect(() => {
    if (auth === null) {
      history.push('/login')
    }
  }, [history, auth])

  useEffect(() => {
    if (!state.showModal) {
      setState((previousState) => ({ ...previousState, customers: getAllCustomers() }))
    }
  }, [state.showModal])

  if (auth === null) {
    return null
  }

  return (
    <>
      <ModalPopup show={state.showModal} setShow={setShow} customer={state.selectedCustomer} />
      <SearchBoxWrapper>
        <SearchBox value={state.searchBox} onChange={search} placeholder="Search by Customer's name" />
      </SearchBoxWrapper>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th colSpan={3} style={{ textAlign: 'center' }}>
              Project1
            </th>
            <th colSpan={3} style={{ textAlign: 'center' }}>
              Project2
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Project Name</th>
            <th>Location</th>
            <th>Investment</th>
            <th>Project Name</th>
            <th>Location</th>
            <th>Investment</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(state.customers).map((customer: any) => {
            return (
              <tr key={state.customers[customer].id} onClick={selectCustomer} id={state.customers[customer].id}>
                <td>{state.customers[customer].name}</td>
                {state.customers[customer].projects.map((project: any, index: number) => {
                  return (
                    <>
                      <td key={`${state.customers[customer].name}_proyect${index + 1}_name_${project.name}`}>
                        {project.name}
                      </td>
                      <td
                        key={`${state.customers[customer].name}_proyect${index + 1}_investment_${project.investment}`}
                      >
                        {project.location}
                      </td>
                      <td key={`${state.customers[customer].name}_proyect${index + 1}_location_${project.location}`}>
                        {project.investment}
                      </td>
                    </>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Button variant="primary" size="lg" active onClick={handleNewCustomer}>
        Add New Customer
      </Button>
    </>
  )
}
