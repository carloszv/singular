/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect, useState, useContext } from 'react'
import { app } from 'services/firebase/firebase'

import { LoadingSpinner } from 'components/elements/LoadingSpinner/LoadingSpinner'

import { Outer, Inner } from './styles'

export const Auth = React.createContext({ user: null })

export const useAuth = () => useContext(Auth)

export const AuthContext = ({ children }: any): ReactElement => {
  const [user, setUser] = useState(null)
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    app.auth().onAuthStateChanged((u: any | null) => {
      setUser(u)
      setShowChild(true)
    })
  }, [])

  if (!showChild) {
    return (
      <Outer>
        <Inner>
          <LoadingSpinner />
        </Inner>
      </Outer>
    )
  } else {
    return (
      <Auth.Provider
        value={{
          user,
        }}
      >
        {children}
      </Auth.Provider>
    )
  }
}
