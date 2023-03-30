/** @format */

import React from 'react'
import {PageLayout} from '@/components/Page'
import {Introduction} from '@/components/sections'
import {Canvas} from '@atlr/react.kit'
import {BackgroundImage} from '@/components/BackgroundImage'

const AppIndex = () => (
  <>
    <PageLayout type={'Prod'}>
      <Canvas>
        <Introduction />
      </Canvas>
    </PageLayout>

    <BackgroundImage />
  </>
)

export default AppIndex
