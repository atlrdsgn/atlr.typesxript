/** @format */

import { createGlobalThemeContract } from '@vanilla-extract/css'

export const vars = createGlobalThemeContract({
  font: {
    system: 'font-system-ui',
    inter: 'font-inter-sans',
    mono: 'font-sf-mono',
    article: 'font-article-hyperlegible',
  },
  fontsize: {
    xs: 'font-size-xs',
    sm: 'font-size-sm',
    md: 'font-size-md',
    base: 'font-size-base',
    lg: 'font-size-lg',
    xl: 'font-size-xl',
    xxl: 'font-size-xxl',
    '3xl': 'font-size-3xl',
    '4xl': 'font-size-4xl',
    '5xl': 'font-size-5xl',
    '6xl': 'font-size-6xl',
    '7xl': 'font-size-7xl',
    '8xl': 'font-size-8xl',
    '9xl': 'font-size-9xl',
  },
  fontweight: {
    superlite: 'font-weight-suprlite',
    lite: 'font-weight-lite',
    normal: 'font-weight-normal',
    medium: 'font-weight-medium',
    semibold: 'font-weight-semibold',
    bold: 'font-weight-bold',
    heavy: 'font-weight-heavy',
    black: 'font-weight-black',
  },
  lineheight: {
    xs: 'line-height-xs',
    sm: 'line-height-sm',
    md: 'line-height-md',
    base: 'line-height-base',
    lg: 'line-height-lg',
    xl: 'line-height-xl',
    xxl: 'line-height-xxl',
    /**
     * these should have the exact same
     * tokens as font size.
     * (not values, but keys)
     * */
    '3xl': 'line-height-3xl',
    '4xl': 'line-height-4xl',
    '5xl': 'line-height-5xl',
    '6xl': 'line-height-6xl',
    '7xl': 'line-height-7xl',
    '8xl': 'line-height-8xl',
    '9xl': 'line-height-9xl',
  },
  space: {
    xs: 'space-xs',
    sm: 'space-sm',
    md: 'space-md',
    lg: 'space-lg',
    xl: 'space-xl',
    xxl: 'space-xxl',
    '3xl': 'space-3xl',
    '4xl': 'space-4xl',
    '5xl': 'space-5xl',
    '6xl': 'space-6xl',
  },
  radii: {
    zero: 'radii-zero',
    none: 'radii-none',
    xs: 'radii-xs',
    sm: 'radii-sm',
    md: 'radii-md',
    base: 'radii-base',
    lg: 'radii-lg',
    pill: 'radii-pill',
  },
  color: {
    // .. add base colors here.
    hypergrape: 'color-hypergrape',
    hypergrape1: 'color-hypergrape1',
    hypergrape2: 'color-hypergrape2',
    hypergrape3: 'color-hypergrape3',
    hypergrape4: 'color-hypergrape4',
    hypergrape5: 'color-hypergrape5',
    hypergrape6: 'color-hypergrape6',
    hypergrape7: 'color-hypergrape7',
    hypergrape8: 'color-hypergrape8',
    hypergrape9: 'color-hypergrape9',
    hypergrape10: 'color-hypergrape10',
  },
})
