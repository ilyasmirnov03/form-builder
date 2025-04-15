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
   * Set name of the input this form field is linked to.
   */
  public set name(name: string) {
    this._name = name;
  }

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
}
