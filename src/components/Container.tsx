/** @format */

import * as React from 'react'
import * as css from '@/kit/container.css'

import clsx from 'clsx'

export const Container = React.forwardRef<HTMLDivElement, JSX.IntrinsicElements['div']>(
  ({className, ...rest}, ref) => {
    return <div {...rest} ref={ref} className={clsx(css.kontainer, className)} />
  }
)

export type ContainerProps = React.ComponentProps<typeof Container>
Container.displayName = 'Container'
