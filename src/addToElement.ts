/**
 * Utilities to append child to an element.
 *
 * @param parentElement - The parent element to which the new element will be appended.
 * @param elements - elements to add to parentElement.
 *
 * @returns  the parentElement with all the elements added.
 *
 * @example
 *
 * ```typescript
 * import { addToElement, createElement } from "kumeru";
 *
 * const Footer = addToElement(
 *   createElement("footer", "Powered by ", { classes: "text-blue-500" }),
 *   [createElement("a", "Kumeru", {classes: "text-sky-900"})]
 * );
 * ```
 */
export function addToElement<T extends HTMLElement>(
  parentElement: T,
  elements: HTMLElement[],
) {
  elements.forEach((element) => parentElement.append(element));

  return parentElement;
}
