/** @format */

import React from 'react'
import {Container, Text, Space, Button} from '@atlr/react.kit'

const codeSrc = 'https://github.com/atlrdsgn/atlr.typesxript'

export const Introduction = () => (
  <>
    <Container width={'small'} align={'center'}>
      <Text size={'3xl'} weight={'bold'} color={'inherit'} align={'center'} font={'mono'}>
        ATLR.TYPESCRIPT©
      </Text>
      <Space size={'small'} />
      <Text size={'md'} weight={'medium'} color={'inherit'} align={'center'}>
        Thank you for using this code.
      </Text>
      <Space size={'medium'} />
      <Button size={'small'} variant={'slate'} href={codeSrc} target={'_blank'}>
        View on GitHub
      </Button>
    </Container>
  </>
)
