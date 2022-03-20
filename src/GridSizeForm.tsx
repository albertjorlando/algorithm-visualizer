import * as React from 'react'
import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack, Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";

interface SubmissionFormProps {
  onSubmit: (d: number) => void
  onReset: () => void
}

const DEFAULT_FORM_STATE = { dimension: 4 }

const GridSizeForm = (props: SubmissionFormProps) => {
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE)

  return (
    <Container py="8">
      <Box as="form" bg="bg-surface" boxShadow="sm" borderRadius="lg">
        <HStack justify="space-between" px="6" pt="6">
          <FormLabel>Email:</FormLabel>
          <FormControl>
            <Input></Input>
          </FormControl>
        </HStack>
        <HStack justify="end" direction="row-reverse" p="6">
          <Button
            colorScheme="blue"
            variant="solid"
            onClick={() => props.onSubmit(formState.dimension)}
          >
            Submit
          </Button>
          <Button
            colorScheme="gray"
            variant="solid"
            onClick={() => {
              props.onReset()
              setFormState(DEFAULT_FORM_STATE)
            }}
          >
            Reset
          </Button>
        </HStack>
      </Box>
    </Container>
  )
}

export default GridSizeForm
