import { JSDOM } from 'jsdom';

/**
 * Provide global declarations to virtual dom environment in tests.
 */
export function provideGlobal(dom: string): void {
  const jsdom = new JSDOM(dom);
  (global as any).document = jsdom.window.document;
  (global as any).HTMLFormElement = jsdom.window.HTMLFormElement;
  (global as any).HTMLInputElement = jsdom.window.HTMLInputElement;
  (global as any).HTMLTextAreaElement = jsdom.window.HTMLTextAreaElement;
  (global as any).HTMLSelectElement = jsdom.window.HTMLSelectElement;

  // Create a form with multiple elements of the same name to get a RadioNodeList
  const dummyDoc = new JSDOM(`
    <form id="dummyForm">
      <input type="radio" name="group">
      <input type="radio" name="group">
    </form>
  `).window.document;

  const form = dummyDoc.getElementById('dummyForm') as HTMLFormElement;
  const radioNodeList = (form.elements as any)['group'];

  // Extract and assign RadioNodeList constructor
  (global as any).RadioNodeList = Object.getPrototypeOf(radioNodeList).constructor;
}

