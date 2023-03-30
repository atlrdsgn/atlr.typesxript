/** @format */

import React from 'react'
import Image from 'next/image'
import * as css from '@/kit/wrapper.css'
import clsx from 'clsx'

import coverBG from '@public/static/images/linear_bg(4x).png'

const IMG = Image

export type BackgroundProps = {
  children?: React.ReactNode
  className?: string
}

export const BackgroundImage = ({
  // ..
  children,
  className,

  ...rest
}: BackgroundProps) => {
  return (
    <div className={css.image_background} {...rest}>
      <IMG
        src={coverBG}
        alt={'background'}
        className={clsx(css.image_background, className)}
        width={5760}
        height={3600}
        style={{objectFit: 'cover', width: '100%', height: '100%', opacity: 0.5}}
      />
    </div>
  )
}
