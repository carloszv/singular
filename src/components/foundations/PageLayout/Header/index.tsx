/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'

import { useAuth } from 'contexts/auth-context'
import { app } from 'services/firebase/firebase'

import { Head, Outer, TopBar, LogoutButton, Logo } from './styles'

export default function Header(): ReactElement {
  const auth = useAuth()

  async function logout() {
    await app
      .auth()
      .signOut()
      .then()
      .catch((error: any) => {
        console.error(error.message)
      })
  }

  return (
    <Head>
      <Outer>
        <TopBar>
          {auth !== null && (
            <LogoutButton type="button" onClick={logout}>
              logout
            </LogoutButton>
          )}
        </TopBar>
        <Logo src="https://snglr.com/wp-content/uploads/2020/09/SNGLR_Logo_RGB_pos_144ppi.png" alt="Singular" />
      </Outer>
    </Head>
  )
}
