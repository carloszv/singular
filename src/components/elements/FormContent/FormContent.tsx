import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'

import { Customer } from 'services/localStorage'
import createCustomer from 'services/localStorage/createCustomer'
import updateCustomer from 'services/localStorage/updateCustomer'

type FormContentProps = {
  handleClose: () => void
  customer: Customer
}

export default function FormContent({ customer, handleClose }: FormContentProps) {
  const [state, setState] = useState(customer)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget
    e.preventDefault()
    e.stopPropagation()

    if (form.checkValidity() !== false) {
      if (state.id === '') {
        createCustomer({ customer: state })
      } else {
        updateCustomer({ customerId: state.id, customer: state })
      }
      handleClose()
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (e.target.name.includes('.')) {
      const targetValues = e.target.name.split('.')

      state.projects.map((project, index) => {
        if (index === Number(targetValues[0])) {
          const projects = [...state.projects]
          projects[index] = {
            ...projects[index],
            [targetValues[1]]: e.target.value,
          }
          setState({ ...state, projects: projects })
        }
      })
    } else {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicCustomerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control required type="text" value={state.name} name="name" onChange={handleChange} />
      </Form.Group>
      {state.projects.map((project, index) => {
        return (
          <>
            <Form.Group key={`formBasicProject${index}Name`} controlId={`formBasicProject${index}Name`}>
              <Form.Label>{`Project ${index + 1} name`}</Form.Label>
              <Form.Control
                required
                type="text"
                value={state.projects[index].name}
                name={`${index}.name`}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId={`formBasicProject${index}Location`}>
              <Form.Label>{`Project ${index + 1} location`}</Form.Label>
              <Form.Control
                required
                type="text"
                value={state.projects[index].location}
                name={`${index}.location`}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId={`formBasicProject${index}Investment`}>
              <Form.Label>{`Project ${index + 1} investment`}</Form.Label>
              <Form.Control
                required
                type="text"
                value={state.projects[index].investment}
                name={`${index}.investment`}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )
      })}
      <Button variant="primary" type="submit">
        Submit
      </Button>{' '}
      <Button variant="secondary" type="button" onClick={handleClose}>
        Close
      </Button>
    </Form>
  )
}
