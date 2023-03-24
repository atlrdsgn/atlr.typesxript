import {style} from '@vanilla-extract/css'

export const space = style({
  all: 'unset',
  display: 'flex',
  appearance: 'none',
  outline: 'none',
  position: 'relative',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  padding: '0',
  margin: '0',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100',
})
