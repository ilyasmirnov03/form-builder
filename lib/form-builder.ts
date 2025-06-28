import { FormField } from './form-field';

// Type to infer the FormField value
type FieldValue<T> = T extends FormField<infer U> ? U : never;

// Type that maps over TFields keys and retrieves the value type from each one
type FormValues<TFields> = {
  [K in keyof TFields]: FieldValue<TFields[K]>;
};

/**
 * Form builder is the form-building class that holds the provided inputs together.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Using unknown would be better but it breaks the TS server and type inferrence on TFields
export class FormBuilder<TFields extends Record<string, FormField<any>>> {

  /**
   * Description of the form inputs.
   */
  private _formDefinition: TFields;

  /**
   * Target form element.
   */
  private readonly _target: HTMLFormElement;

  /**
   * Get fields of form.
   */
  public get fields(): TFields {
    return this._formDefinition;
  }

  /**
   * Get value of the form.
   */
  public get value(): FormValues<TFields> {
    const val: Partial<FormValues<TFields>> = {};

    for (const fieldKey in this._formDefinition) {
      val[fieldKey] = this._formDefinition[fieldKey].value;
    }

    return val as FormValues<TFields>;
  }

  /**
   * Constructor of the form builder class.
   * @param selector The selector of the form element.
   * @param formDefinition Form definition
   * @throws Error when provided selector doesn't match any element.
   * @throws TypeError when found target with provided selector isn't a form element.
   */
  public constructor(selector: string, formDefinition: TFields) {
    this._formDefinition = formDefinition;
    const target = document.querySelector(selector);
    if (target == null) {
      throw new Error(`FormBuilder init error: given selector "${selector}" matches nothing.`);
    }

    if (!(target instanceof HTMLFormElement)) {
      throw new TypeError('FormBuilder init error: found target isn\'t a form element.');
    }

    this._target = target;

    for (const key of Object.keys(formDefinition)) {
      formDefinition[key].setName(key, target);
    }
  }

  /**
   * Get the target element.
   * @throws Error if target is not available yet, i.e. == null.
   */
  public get target(): HTMLFormElement {
    if (this._target == null) {
      throw new Error('FormBuilder target get error: target isn\'t available yet.');
    }
    return this._target;
  }

  /**
   * Subscribe to the submit event.
   */
  public onSubmit(callback: (value: FormValues<TFields>) => void): void {
    this._target.addEventListener('submit', (ev: SubmitEvent) => {
      ev.preventDefault();
      callback(this.value);
    });
  }
}
