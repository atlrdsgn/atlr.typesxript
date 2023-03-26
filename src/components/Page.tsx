/** @format */

import React from 'react'
import { AppWrapper } from './AppWrapper'
import { ArticleFooter, Footer } from './Footer'

import type { PageLayoutProps } from '@/ts/page'

export const PageLayout = ({
  // ..
  children,
  type = 'Prod',
}: PageLayoutProps) => {
  if (type === 'Article') {
    return (
      <>
        <AppWrapper>
          <main>{children}</main>
        </AppWrapper>
        <ArticleFooter />
      </>
    )
  }

  if (type === 'Standard') {
    return (
      <>
        <AppWrapper>
          <main>{children}</main>
        </AppWrapper>
        <Footer />
      </>
    )
  }

  return (
    <>
      <AppWrapper>
        <main>{children}</main>
      </AppWrapper>
      <Footer className={'nothing'} />
    </>
  )
}
