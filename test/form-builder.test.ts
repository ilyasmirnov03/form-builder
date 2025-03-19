import {FormBuilder} from "../lib";

describe('FormBuilder', () => {
  test('Should throw on unmatched selector', () => {
    expect(() => {
      // TODO: actually provide a valid DOM to run the querySelector on.
      new FormBuilder('.form', {});
    }).toThrow();
  })
});
