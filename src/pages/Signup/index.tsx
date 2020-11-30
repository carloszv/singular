import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { app } from 'services/firebase/firebase'

import { Inner, ErrorMessage, InputGroup, Input, ButtonGroupWrapper, LoginButton, SignupButton } from './styles'

export default function Signup({ setSignup }: any) {
  const history = useHistory()
  const [error, seterror] = useState('')
  const [login, setLogin] = useState(false)

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .createUserWithEmailAndPassword(user.value, password.value)
      .then((result) => {
        history.push('/')
      })
      .catch((error) => {
        seterror(error.message)
      })
  }

  if (login) {
    history.push('/login')
  }

  return (
    <Inner>
      <Form onSubmit={handleSignUp}>
        <h1>Register</h1>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <InputGroup>
          <Input name="user" placeholder="Register your Email" />
        </InputGroup>
        <InputGroup>
          <Input name="password" type="password" placeholder="Password" />
        </InputGroup>
        <ButtonGroupWrapper>
          <SignupButton type="submit">Signup</SignupButton>{' '}
          <LoginButton onClick={() => setLogin(true)} type="button">
            Login now!
          </LoginButton>
        </ButtonGroupWrapper>
      </Form>
    </Inner>
  )
}
