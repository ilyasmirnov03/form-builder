import { FormPart } from './form-part';

type FormDefinition = Record<string, FormPart>;

/**
 * Form builder is the form-building class that holds the provided inputs together.
 */
export class FormBuilder {

  /**
   * Description of the form inputs.
   */
  private _formDefinition: FormDefinition;

  /**
   * Target form element.
   */
  private readonly _target?: HTMLFormElement;

  /**
   * Constructor of the form builder class.
   * @param selector The selector of the form element.
   * @param formDefinition Form definition
   * @throws Error when provided selector doesn't match any element.
   * @throws TypeError when found target with provided selector isn't a form element.
   */
  public constructor(selector: string, formDefinition: FormDefinition) {
    this._formDefinition = formDefinition;
    const target = document.querySelector(selector);
    if (target == null) {
      throw new Error(`FormBuilder init error: given selector "${selector}" matches nothing.`);
    }

    if (!(target instanceof HTMLFormElement)) {
      throw new TypeError(`FormBuilder init error: found target isn't a form element.`);
    }

    this._target = target;
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
}
