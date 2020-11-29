/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

import { Auth } from 'contexts/auth-context'

import { customers } from './customers.json'
import { Outer, SearchBoxWrapper, SearchBox } from './styles'

export default function Home() {
  const { user }: any = useContext(Auth)
  const history = useHistory()
  const [jsonCustomers, setJsonCustomers] = useState(customers)
  const [searchBox, setSearchBox] = useState('')

  function search(e: string) {
    setSearchBox(e)
    e.length === 0
      ? setJsonCustomers(customers)
      : setJsonCustomers(customers.filter((customer) => customer.name.toLowerCase().includes(e)))
  }

  useEffect(() => {
    if (user === null) {
      history.push('/login')
    }
  }, [history, user])

  return (
    <Outer>
      <SearchBoxWrapper>
        <SearchBox value={searchBox} onChange={(e) => search(e.target.value)} placeholder="Search by Customer's name" />
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
          {Object.keys(jsonCustomers).map((key: any, pindex: number) => {
            return (
              <tr>
                <td>{jsonCustomers[key].name}</td>
                {jsonCustomers[key].projects.map((project: any, index: number) => {
                  return (
                    <>
                      <td>{project.name}</td>
                      <td>{project.location}</td>
                      <td>{project.investment}</td>
                    </>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Outer>
  )
}
