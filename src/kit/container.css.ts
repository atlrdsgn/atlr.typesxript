/** @format */

import { style } from '@vanilla-extract/css'

export const kontainer = style({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  marginTop: 'auto',
  marginBottom: 'auto',

  width: '100%',
  maxWidth: '520px',

  '@media': {
    'screen and (min-width: 640px)': {},
    'screen and (min-width: 768px)': {},
    'screen and (min-width: 1024px)': {},
    'screen and (min-width: 1280px)': {},
    'screen and (min-width: 1536px)': {},
  },

  selectors: {},
})
