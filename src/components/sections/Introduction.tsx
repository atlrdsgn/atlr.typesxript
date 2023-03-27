/** @format */

import React from 'react'
import {Container, Text, Space, Button} from '@atlr/react.kit'

const codeSrc = 'https://github.com/atlrdsgn/atlr.typescript'

export const Introduction = () => (
  <>
    <Container width={'small'} align={'center'}>
      <Text size={'xxl'} weight={'bold'} color={'inherit'} align={'center'}>
        atlr.typesxript
      </Text>
      <Space size={'small'} />
      <Text size={'sm'} weight={'normal'} color={'inherit'} align={'center'}>
        Thank you for using this code.
      </Text>
      <Space size={'medium'} />
      <Button size={'small'} variant={'hypergrape'} href={codeSrc} target={'_blank'}>
        View on GitHub
      </Button>
    </Container>
  </>
)
