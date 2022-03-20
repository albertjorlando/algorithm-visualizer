import * as React from 'react'
import { Heading, Text } from '@chakra-ui/react'

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => (
  <>
    <Heading fontSize="5xl">{title}</Heading>
    <Text fontSize="md" color="muted">
      {subtitle}
    </Text>
  </>
)

export default Header
