import React, { ReactElement, ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'

import { Main, Outer } from './PageLayout.styles'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps): ReactElement {
  return (
    <>
      <Header />
      <Main>
        <Outer>{children}</Outer>
      </Main>
      <Footer />
    </>
  )
}
