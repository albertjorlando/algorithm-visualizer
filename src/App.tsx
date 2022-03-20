import React, { useState } from 'react'

import Page from './PageContainer'
import Header from './Header'
import MatrixSizeForm from './GridSizeForm'
import MatrixVisualizer from './GridVisualization'
import Matrix from './Matrix'

interface AppProps {
  title: string
  subtitle: string
}

const App = ({ title, subtitle }: AppProps) => {
  const [matrix, setMatrix] = useState<Matrix>()

  const handleSubmit = (n: number) => {
    setMatrix(Matrix.from(n))
  }

  const handleReset = () => {
    setMatrix(undefined)
  }

  const handleToggleEntry = (i: number): void => {
    if (!matrix) {
      throw new Error('matrix cannot be undefined')
    }
    setMatrix(matrix.withEntryToggled(i))
  }

  return (
    <Page>
      <Header title={title} subtitle={subtitle} />
      <MatrixSizeForm onSubmit={handleSubmit} onReset={handleReset} />
      {matrix && (
        <MatrixVisualizer matrix={matrix} toggleEntry={handleToggleEntry} />
      )}
    </Page>
  )
}

export default App
