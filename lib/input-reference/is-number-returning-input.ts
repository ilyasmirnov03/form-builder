/**
 * Is the passed input a number-returning input?
 * A number-returning input is an input that stores a number
 * that is represented as a string in the input's value property
 * (as is almost every value property in HTML).
 * @param input The HTML input to check.
 * @returns Boolean that indicates whether the input's value is really a number.
 */
export function isNumberReturningInput(input: HTMLInputElement): boolean {
  return input.type === 'number' || input.type === 'week' ||
    input.type === 'range' || input.type === 'month';
}

