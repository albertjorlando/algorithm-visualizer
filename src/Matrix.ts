import InvalidEntryError from './NegativeValueError'

class Matrix {
  private matrix: string[][] = []
  private n: number = 0

  static from(n: number): Matrix {
    if (n <= 0) {
      throw new Error('`n` must be greater than 0.')
    }
    const instance = new Matrix()
    instance.matrix = [...new Array(n).fill(new Array(n).fill('0'))]
    instance.n = n
    return instance
  }

  withEntryToggled(i: number): Matrix {
    this.checkListEntry(i)
    const instance = new Matrix()
    instance.matrix = [...new Array(this.n).fill(new Array(this.n).fill('0'))]
    instance.n = this.n
    const valueAtEntry = instance.getListEntry(i)
    instance.setListEntry(i, Matrix.getInverse(valueAtEntry))
    console.log(instance.matrix)
    return instance
  }

  public getN(): number {
    return this.n
  }

  public getListEntry(i: number): string {
    this.checkListEntry(i)
    return this.matrix[Math.floor(i / this.n)][i % this.n]
  }

  public setListEntry(i: number, s: string): void {
    this.checkListEntry(i)
    if (s === '') {
      throw new Error('string cannot be empty')
    }

    const row = Math.floor(i / this.n)
    const col = i % this.n
    console.log({ n: this.n, row, col, entry: this.matrix[row][col] })
    this.matrix[col][row] = s
    console.log(this.matrix)
  }

  private checkListEntry(i: number) {
    if (i < 0 || i >= this.n * this.n) {
      throw new InvalidEntryError(i)
    }
  }

  private static getInverse(valueAtEntry: string): string {
    return valueAtEntry === '0' ? '1' : '0'
  }
}

export default Matrix
