/** @format */

import {style} from '@vanilla-extract/css'

export const app_footer = style({
  color: 'rgb(var(--slate-rgb))',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: 'inherit',
  padding: '1rem',

  selectors: {},
})

export const article_footer = style({
  color: 'rgb(var(--slate-rgb))',
  textAlign: 'center',
  position: 'relative',
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: 'inherit',
  padding: '2rem',

  selectors: {},
})

export const command_text = style({
  fontSize: '12px',
  fontWeight: 'normal',
})
