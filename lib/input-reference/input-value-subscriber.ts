import { HandledHTMLInputs } from '../type/handled-html-inputs.type';

/**
 * InputValueSubscriber is a wrapper around all possible HTML
 * input elements that handles boilerplate event listener code.
 */
export class InputValueSubscriber<T> {

  /**
   * Optional onChange callback.
   */
  private _onChange: ((value: T) => void) | null = null;

  /**
   * InputReference constructor.
   * @param inputElement Input element to reference.
   * @param onChange Callback for input change event.
   */
  public constructor(
    inputElement: HandledHTMLInputs,
    onChange: (value: T) => void,
  ) {

    // Subscribe to change events and send new value to passed onChange callback
    if (inputElement instanceof RadioNodeList) {
      for (const el of inputElement.values()) {
        el.addEventListener('change', () => {
          onChange(inputElement.value as T);
          this._onChange?.(inputElement.value as T);
        });
      }
    } else {
      inputElement.addEventListener('change', () => {
        let value: T;

        if (inputElement.type === 'number') {
          value = Number(inputElement.value) as T;
        } else if (inputElement instanceof HTMLInputElement && inputElement.type === 'checkbox') {
          value = inputElement.checked as T;
        } else {
          value = inputElement.value as T;
        }

        onChange(value);
        this._onChange?.(value);
      });
    }

  }

  /**
   * Subscribe to the input's change event.
   */
  public subscribeToChange(onChange: (v: T) => void): void {
    this._onChange = onChange;
  }
}
