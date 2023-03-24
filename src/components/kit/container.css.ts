import {style} from '@vanilla-extract/css'

export const container = style({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 24,
  paddingRight: 24,

  width: '100%',
  margin: 'auto',
})
