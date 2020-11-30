import React, { useEffect, useState, useContext, ReactNode } from 'react'
import { app } from 'services/firebase/firebase'

import { LoadingSpinner } from 'components/foundations/LoadingSpinner/LoadingSpinner'
import PageLayout from 'components/foundations/PageLayout/PageLayout'

import { Inner } from './styles'

export type User = {
  uid: string
  username: string
}

const Auth = React.createContext<User | null>(null)

export const useAuth = () => useContext(Auth)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.auth().onAuthStateChanged((u: any | null) => {
      setUser(u)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <PageLayout>
        <Inner>
          <LoadingSpinner />
        </Inner>
      </PageLayout>
    )
  }

  return <Auth.Provider value={user}>{children}</Auth.Provider>
}
