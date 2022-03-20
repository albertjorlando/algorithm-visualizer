import * as React from 'react'
import { Box, Container } from '@chakra-ui/react'

interface PageContainerProps {
  children: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => (
  <Box as="section" pt="8" pb="24">
    <Container maxW='container.sm' centerContent={true}>{children}</Container>
  </Box>
)

export default PageContainer
