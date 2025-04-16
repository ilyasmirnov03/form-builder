import { isValidFormElement } from './is-valid-form-element';

/**
 * Form part is a description of an input in the FormBuilder class.
 */
export class FormField<T> {

  /**
   * Value of the form field.
   */
  private _value: T;

  /**
   * Name of the input this form field is linked to.
   */
  private _name = '';

  /**
   * Reference to the used input element.
   * In case of radio buttons, is a list of radio button elements.
   */
  private _inputReference?: HTMLInputElement | HTMLTextAreaElement | RadioNodeList;

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
   * @throws TypeError if found form element is not of valid type (accepts only)
   */
  public setName(name: string, form: HTMLFormElement): void {
    this._name = name;

    const item = form.elements.namedItem(name);
    if (isValidFormElement(item)) {
      this._inputReference = item;
    } else {
      throw new TypeError(`FormField setName error: found item "${name}" is invalid.`);
    }
  }
}
