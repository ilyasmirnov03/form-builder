import { InputValueSubscriber } from './input-reference/input-value-subscriber';
import { isValidFormElement } from './util/is-valid-form-element';

/**
 * Form part is a description of an input in the FormBuilder class.
 */
export class FormField<T> {

  /**
   * Value of the form field.
   */
  private _value: T;

  /**
   * Input value subscriber that helps with subscribing to input events.
   */
  private _inputValueSubscriber?: InputValueSubscriber<T>;

  /**
   * Field's value getter.
   */
  public get value(): T {
    return this._value;
  }

  /**
   * FormField
   * @param value Initial value.
   */
  public constructor(value: T) {
    this._value = value;
  }

  /**
   * Sets the name and the input element of this field.
   * @param name Name of the input.
   * @param form Parent form element of the field.
   * @throws TypeError if found form element is not of valid type.
   */
  public setName(name: string, form: HTMLFormElement): void {
    const item = form.elements.namedItem(name);

    if (!isValidFormElement(item)) {
      throw new TypeError(`FormField setName error: found item "${name}" is invalid.`);
    }

    this._inputValueSubscriber = new InputValueSubscriber(item, (v) => this._value = v);

    item.value = String(this._value);

    // TODO: add option to either assign value from html or to html
  }

  /**
   * Callback to execute on input's value change.
   * @param callback Function that will get executed with the input's new value.
   */
  public onChange(callback: (value: T) => void): void {
    this._inputValueSubscriber?.subscribeToChange(callback);
  }
}

