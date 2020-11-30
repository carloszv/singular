/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router-dom'

import { app } from 'services/firebase/firebase'
import { useAuth } from 'contexts/auth-context'

import Signup from '../Signup'

import { Inner, ErrorMessage, InputGroup, Input, ButtonGroupWrapper, LoginButton, SignupButton } from './styles'

export default function Login() {
  const [signup, setSignup] = useState(false)
  const auth = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (auth) {
      history.push('/')
    }
  }, [auth])

  const loginWitheEmail = async (e: any) => {
    e.preventDefault()
    const { user, password } = e.target.elements

    await app
      .auth()
      .signInWithEmailAndPassword(user.value, password.value)
      .then((result: any) => {
        history.push('/')
      })
      .catch((error: any) => {
        setError(error.message)
      })
  }

  if (signup) {
    history.push('/signup')
  }

  return (
    <Inner>
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
          <LoginButton type="submit">Login</LoginButton>{' '}
          <SignupButton type="button" onClick={() => setSignup(true)}>
            Signup Now!
          </SignupButton>
        </ButtonGroupWrapper>
      </Form>
    </Inner>
  )
}
