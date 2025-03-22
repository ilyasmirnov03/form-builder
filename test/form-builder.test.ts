import {FormBuilder} from "../lib";
import { JSDOM } from 'jsdom';

const domWithoutForm = `<!DOCTYPE html><html><body><div></div></body></html>`;
const domWithForm = `<!DOCTYPE html><html><body><form class="form"></form></body></html>`;

describe('FormBuilder', () => {
  test('Should throw on unmatched selector', () => {
    expect(() => {
      const dom = new JSDOM(domWithoutForm);
      (global as any).document = dom.window.document;

      new FormBuilder('.form', {});
    }).toThrow();
  });

  test('Should not throw on matched selector', () => {
    expect(() => {
      const dom = new JSDOM(domWithForm);
      (global as any).document = dom.window.document;
      (global as any).HTMLFormElement = dom.window.HTMLFormElement;

      new FormBuilder('.form', {});
    }).not.toThrow();
  });

  test('Should throw when provided selector isn\'t an HTMLFormElement', () => {
    expect(() => {
      const dom = new JSDOM(domWithoutForm);
      (global as any).document = dom.window.document;
      (global as any).HTMLFormElement = dom.window.HTMLFormElement;

      new FormBuilder('div', {});
    }).toThrow(TypeError);
  });
});
