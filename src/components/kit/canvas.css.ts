import {style} from '@vanilla-extract/css'

export const canvas = style({
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  maxWidth: '100vw',
  transform: 'translate(-50%, -50%)',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'inherit',
  margin: 'auto',
  padding: '0',
  width: '100%',
  position: 'absolute',
  top: '49%',
  left: '50%',
})
