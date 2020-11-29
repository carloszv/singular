/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

import { app } from 'services/firebase/firebase'
import { Auth } from 'contexts/auth-context'

import Signup from '../Signup'

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

export default function Login() {
  const [signup, setSignup] = useState(false)
  const { user } = useContext(Auth)
  const [error, setError] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  const loginWitheEmail = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .signInWithEmailAndPassword(user.value, password.value)
      .then((result: any) => {
        console.log(result)
        history.push('/')
      })
      .catch((error: any) => {
        setError(error.message)
      })
  }

  return (
    <Outer>
      <Inner>
        {!signup ? (
          <Form onSubmit={loginWitheEmail}>
            <h1>Login</h1>
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            <InputGroup>
              <Input name="user" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <Input name="password" type="password" placeholder="Password" />
            </InputGroup>
            <ButtonGroupWrapper>
              <LoginButton type="submit">Login</LoginButton>
              <RegisterButton type="button" onClick={() => setSignup(true)}>
                Register Now!
              </RegisterButton>
            </ButtonGroupWrapper>
          </Form>
        ) : (
          <Signup setSignup={setSignup} />
        )}
      </Inner>
    </Outer>
  )
}
