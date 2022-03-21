import type { FindOptions } from "./types.ts";

/**
 * Utility to create an element.
 *
 * @param tag - Which HTML element to use?
 * @param text - Text to put inside the element.
 * @param options - Options to add interactivity and styles to the element.
 * @returns An element ready to use.
 *
 * @example
 * ```javascript
 * export const AppTitle = createElement("h1", "Sergif", {
 *   classes: "underline hover:underline decoration-pink-500 text-7xl my-7",
 * });
 * ```
 */
export function createElement<Tag extends keyof HTMLElementTagNameMap>(
  tag: Tag,
  text?: string | FindOptions<Tag>,
  options?: FindOptions<Tag>
): HTMLElementTagNameMap[Tag] {
  const element = document.createElement(tag);

  if (typeof text === "string") {
    element.textContent = text;
  } else {
    // eslint-disable-next-line no-param-reassign
    options = text;
  }

  if (options) {
    const { classes, attributes, functions } = options;

    if (classes) {
      const classesToAdd =
        typeof classes === "string" ? classes.split(" ") : classes;

      element.classList.add(...classesToAdd);
    }

    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key].toString());
      });
    }

    if (functions) {
      Object.keys(functions).forEach((key) => {
        element.addEventListener(key, functions[key]);
      });
    }
  }

  return element;
}
