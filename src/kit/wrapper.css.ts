/** @format */

import {style} from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  paddingTop: '140px',
  minHeight: '100vh',
  maxWidth: 'var(--max-width)',
  position: 'relative',
  zIndex: 0,
})
