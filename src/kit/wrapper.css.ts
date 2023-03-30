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

export const image_background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  overflow: 'hidden',
})
