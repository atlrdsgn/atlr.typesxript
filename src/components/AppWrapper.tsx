/** @format */

import React from 'react'
import * as css from '@/kit/wrapper.css'

export type WrapperProps = {
  children?: React.ReactNode
}

export const AppWrapper = ({
  // ..
  children,
  ...rest
}: WrapperProps) => {
  return (
    <div className={css.wrapper} {...rest}>
      {children}
    </div>
  )
}
