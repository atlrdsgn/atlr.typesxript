/** @format */

import '@/scss/index.scss'
import '@atlr/react.kit/styles'

import React from 'react'
import {KitProvider} from '@atlr/react.kit'

import type {AppProps} from 'next/app'
import type {GetLayoutFn} from '@/ts/page'
import {useFontsLoaded} from '@/components/hooks/use-fonts-loaded'

/*
 * Copyright (C) 2023 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler/chvndler.ch/LICENSE for more information.
 */

const AppContext = React.createContext<{fontsLoaded: boolean}>({fontsLoaded: false})
export const useAppContext = () => React.useContext(AppContext)

const App = ({Component, pageProps, ...rest}: AppProps) => {
  useFontsLoaded()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

  return (
    <>
      <KitProvider>{getLayout({Component, pageProps, ...rest})}</KitProvider>
    </>
  )
}

export default App
