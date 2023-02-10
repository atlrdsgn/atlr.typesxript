import Link from 'next/link'

import {Box, Canvas, Container, Text} from '@/components/kit'
import {Typesxript} from '@/components/vector/logos/TYPESXRIPT'

export const Introduction = () => {
  return (
    <Box css={{width: '100%', height: '100vh', backgroundColor: '$gray12'}}>
      <Canvas css={{}}>
        <Container size={'0'} centered>
          <Typesxript />
        </Container>
        <Container size={'0'} centered>
          <Text size={'1'}>by Atlr® Design</Text>
        </Container>
      </Canvas>

      <Container centered asFooter css={{}}>
        <Link href={'/start'}>
          <Text size={'2'} weight={'bold'}>
            Get Started
          </Text>
        </Link>
      </Container>
    </Box>
  )
}
