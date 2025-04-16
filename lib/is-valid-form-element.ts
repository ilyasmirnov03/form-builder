/**
 * Check if passed form element is valid for use with FormField.
 * @param formElement Element to check
 */
export function isValidFormElement(
  formElement: Element | RadioNodeList | null,
): formElement is HTMLInputElement | HTMLTextAreaElement | RadioNodeList {
  return formElement instanceof HTMLInputElement || formElement instanceof HTMLTextAreaElement ||
    formElement instanceof RadioNodeList;
}
