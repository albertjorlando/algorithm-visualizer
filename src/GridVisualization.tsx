import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Matrix from './Matrix'

const MATRIX_SIDE_LENGTH = 350

interface VisualizationProps {
  matrix: Matrix
  toggleEntry: (i: number) => void
}

const GridVisualization = ({ matrix, toggleEntry }: VisualizationProps) => {
  const n = matrix.getN()

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${n}, ${MATRIX_SIDE_LENGTH / n}px)`}
      gridTemplateRows={`repeat(${n}, ${MATRIX_SIDE_LENGTH / n}px)`}
    >
      {[...Array(n * n)].map((_, i: number) => (
        <Flex
          onClick={() => toggleEntry(i)}
          align="center"
          justify="center"
          border="1px"
          key={`flex-${i}`}
        >
          {
            <Text key={`text-${i}`} fontSize="x-large">
              {matrix.getListEntry(i)}
            </Text>
          }
        </Flex>
      ))}
    </Box>
  )
}

export default GridVisualization
