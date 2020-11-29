import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { app } from 'services/firebase/firebase'

import {
  Outer,
  Inner,
  ErrorMessage,
  InputGroup,
  Input,
  ButtonGroupWrapper,
  LoginButton,
  RegisterButton,
} from './styles'

export default function Signup({ setSignup }: any) {
  const history = useHistory()
  const [error, seterror] = useState('')

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .createUserWithEmailAndPassword(user.value, password.value)
      .then((result) => {
        console.log(result)
        history.push('/')
      })
      .catch((error) => {
        seterror(error.message)
      })
  }
  return (
    <Outer>
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
            <RegisterButton type="submit">Register</RegisterButton>
            <LoginButton onClick={() => setSignup(false)} type="button">
              Login now!
            </LoginButton>
          </ButtonGroupWrapper>
        </Form>
      </Inner>
    </Outer>
  )
}
