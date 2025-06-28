import { HandledHTMLInputs } from '../type/handled-html-inputs.type';

/**
 * Check if passed form element is valid for use with FormField.
 * @param formElement Element to check
 */
export function isValidFormElement(
  formElement: Element | RadioNodeList | null,
): formElement is HandledHTMLInputs {
  return formElement instanceof HTMLInputElement || formElement instanceof HTMLTextAreaElement || formElement instanceof HTMLSelectElement || formElement instanceof RadioNodeList;
}
