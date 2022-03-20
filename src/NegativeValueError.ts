class NegativeValueError extends Error {
  constructor(val: number) {
    const msg = `val=${val} must be greater than or equal to 0`
    super(msg)
    Object.setPrototypeOf(this, NegativeValueError.prototype)
  }
}

export default NegativeValueError
