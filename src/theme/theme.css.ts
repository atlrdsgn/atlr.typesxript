/** @format */

import {createGlobalTheme} from '@vanilla-extract/css'
import {hypergrape} from './color'
import {vars} from './vars.css'

createGlobalTheme(':root', vars, {
  font: {
    system: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", sans-serif',
    inter: '"Inter", system-ui, sans-serif',
    mono: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
    article: 'Atkinson Hyperlegible Regular',
  },
  fontsize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontweight: {
    superlite: '100',
    lite: '200',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900',
  },
  lineheight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '1.75rem',
    xxl: '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '1',
    '6xl': '1',
    '7xl': '1',
    '8xl': '1',
    '9xl': '1',
  },
  space: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    xxl: '2rem', // 32px
    '3xl': '2.5rem', // 40px
    '4xl': '3rem', // 48px
    '5xl': '3.5rem', // 56px
    '6xl': '4rem', // 64px
  },
  radii: {
    zero: '0',
    none: '0',
    xs: '6px',
    sm: '8px',
    md: '10px',
    base: '12px',
    lg: '14px',
    pill: '9999px',
  },
  color: {
    // .. add base colors here.
    hypergrape: hypergrape.hypergrape,
    hypergrape1: hypergrape.hypergrape1,
    hypergrape2: hypergrape.hypergrape2,
    hypergrape3: hypergrape.hypergrape3,
    hypergrape4: hypergrape.hypergrape4,
    hypergrape5: hypergrape.hypergrape5,
    hypergrape6: hypergrape.hypergrape6,
    hypergrape7: hypergrape.hypergrape7,
    hypergrape8: hypergrape.hypergrape8,
    hypergrape9: hypergrape.hypergrape9,
    hypergrape10: hypergrape.hypergrape10,
  },
})

export const theme = vars
