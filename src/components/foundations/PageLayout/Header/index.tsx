/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { Auth } from 'contexts/auth-context'
import { app } from 'services/firebase/firebase'

import { Head, Outer, TopBar, LogoutButton, Logo } from './styles'

export default function Header(): ReactElement {
  const history = useHistory()
  const { user }: any = useContext(Auth)

  async function logout() {
    await app
      .auth()
      .signOut()
      .then((result: any) => {
        console.log(result)
        history.push('/')
      })
      .catch((error: any) => {
        console.error(error.message)
      })
  }

  return (
    <Head>
      <Outer>
        <TopBar>
          {user !== null && (
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
