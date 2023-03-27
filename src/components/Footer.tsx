/** @format */

import React from 'react'
import Link from 'next/link'
import {Space} from '@atlr/react.kit'

import * as css from '@/kit/footer.css'

const webSource = 'https://github.com/chvndler/chvndler.ch'

export type FooterProps = {
  className?: string
}

export const Footer = ({className, ...props}: FooterProps) => (
  <footer className={css.app_footer} {...props}>
    <span className={css.command_text}>Press ⌘ + K anywhere to view menu.</span>
    <Space size={'large'} />
    <span>
      © CDC 2023.
      <br />
      Website built using React, powered by <Link href='https://github.com/atlrdsgn'>atlr.kit</Link>
      ®.
    </span>
    <Space size={'small'} />
    <span>
      <Link href={webSource}>view source</Link>
    </span>
  </footer>
)

export const ArticleFooter = ({className, ...props}: FooterProps) => (
  <footer className={css.article_footer} {...props}>
    <span>
      © CDC 2023.
      <br />
      Website built using React, powered by <Link href='https://github.com/atlrdsgn'>atlr.kit</Link>
      ®.
    </span>
    <Space size={'small'} />
    <span>
      <Link href={webSource}>view source</Link>
    </span>
  </footer>
)
