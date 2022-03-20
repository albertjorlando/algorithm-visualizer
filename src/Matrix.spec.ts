import Matrix from './Matrix'

describe('matrix class', () => {
  it('has size n^2 where n = 4', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(matrix.getN()).toBe(n)
  })

  it('has size n^2 where n = 16', () => {
    const n = 8
    const matrix = Matrix.from(n)
    expect(matrix.getN()).toBe(n)
  })

  it('has default list entries', () => {
    const n = 4
    const matrix = Matrix.from(n)
    for (let i = 0; i < n * n; i++) {
      expect(matrix.getListEntry(i)).toBe('0')
    }
  })

  it('has default list entries', () => {
    const n = 4
    const matrix = Matrix.from(n)
    for (let i = 0; i < n * n; i++) {
      expect(matrix.getListEntry(i)).toBe('0')
    }
  })

  it('throws error with negative list index passed to getListEntry', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.getListEntry(-1)).toThrow()
  })

  it('throws error with out of bounds list index passed to getListEntry', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.getListEntry(n * n)).toThrow()
  })

  it('does not throws error with negative non-negative index', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.setListEntry(0, 'test')).not.toThrow()
  })

  it('throws error with negative list index', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.setListEntry(-1, 'test')).toThrow()
  })

  it('throws error with out of bounds list index', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.setListEntry(n * n, 'test')).toThrow()
  })

  it('throws error with empty string value', () => {
    const n = 4
    const matrix = Matrix.from(n)
    expect(() => matrix.setListEntry(-1, '')).toThrow()
  })

  it('toggles the ith cell correctly', () => {
    const n = 4

    const matrix1 = Matrix.from(n)
    const entry1 = matrix1.getListEntry(n + 1)
    expect(entry1).toBe('0')

    const matrix2 = matrix1.withEntryToggled(n + 1)
    const entry2 = matrix2.getListEntry(n + 1)
    expect(entry2).toBe('1')
  })
})

export {}
