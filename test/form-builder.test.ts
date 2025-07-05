import { FormBuilder, FormField } from "../lib";
import { provideGlobal } from "./provide-global";

const domWithoutForm = `<!DOCTYPE html><html><body><div></div></body></html>`;
const domWithForm = `<!DOCTYPE html><html><body><form class="form"></form></body></html>`;

describe('FormBuilder', () => {
  test('Should throw on unmatched selector', () => {
    expect(() => {
      provideGlobal(domWithoutForm);

      new FormBuilder('.form', {});
    }).toThrow(Error);
  });

  test('Should not throw on matched selector', () => {
    expect(() => {
      provideGlobal(domWithForm);;

      new FormBuilder('.form', {});
    }).not.toThrow();
  });

  test('Should throw when provided selector isn\'t an HTMLFormElement', () => {
    expect(() => {
      provideGlobal(domWithoutForm);

      new FormBuilder('div', {});
    }).toThrow(TypeError);
  });

  test('Should throw error on input not found in passed form', () => {
    expect(() => {
      provideGlobal(domWithForm);

      new FormBuilder('.form', {
        test: new FormField(''),
      });
    }).toThrow(TypeError);

  });
});

