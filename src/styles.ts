import { Interpolation, Theme } from '@emotion/react'

const createStyles = <T extends { [key: string]: Interpolation<Theme> }>(
  arg: T
): T => arg

export { createStyles }
