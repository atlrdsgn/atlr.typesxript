/** @format */

export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export const isClient = typeof document !== 'undefined'
export const isServer = !isClient

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL || '')
export const siteOrigin = siteURL.origin
export const safeWindow = isClient ? window : ({} as any)

export const fathom = process.env.NEXT_PUBLIC_FATHOM_ID

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(
    `Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.
    
1. Create .env file at the root of your project.
2. Add NEXT_PUBLIC_SITE_URL=http://localhost:3000
3. For other environments (like production), make sure you set the correct URL.
    `
  )
}

export const defaultMeta = {
  title: 'Chandler Chappell',
  description: `Personal.`,
  ogImage: `${siteOrigin}/og.png`,
  twitter: {
    handle: '@chvndlerch',
    site: 'chvndler.ch',
  },
}

export const atelierLog = `

 █████╗█████████████████╗    ███████████████╗   
██╔══██╚══██╔══██╔════██║    ████╔════██╔══██╗  
███████║  ██║  █████╗ ██║    ███████╗ ██████╔╝  
██╔══██║  ██║  ██╔══╝ ██║    ████╔══╝ ██╔══██╗  
██║  ██║  ██║  █████████████████████████║  ████╗
╚═╝  ╚═╝  ╚═╝  ╚══════╚══════╚═╚══════╚═╝  ╚═╚═╝
                                               
   From atelier. https://atlrdsgn.com
`
