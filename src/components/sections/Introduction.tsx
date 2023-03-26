/** @format */

import React from 'react'
import { Container, Text, Space } from '@atlr/react.kit'

const atlr = 'https://github.com/atlrdsgn'

export const Introduction = () => (
  <>
    {/* <!-- <Avatar /> --> */}
    <Container width={'small'} align={'center'}>
      <Text size={'xxl'} weight={'bold'} color={'inherit'} align={'center'}>
        typesxript.
      </Text>
      <Space size={'small'} />
      <Text size={'sm'} weight={'normal'} color={'inherit'} align={'center'}>
        Thank you for using this code.
      </Text>
      <Space size={'2xlarge'} />
    </Container>
  </>
)
