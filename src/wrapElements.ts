import { addToElement } from "./addToElement.ts";
import { createElement } from "./createElement.ts";

/**
 * Utility to wrap elements on a div with custom classes.
 *
 * @param  classes - The class names to add to the div.
 * @param elements - The children to add to the div.
 *
 * @example
 * ```javascript
 * const App = wrapElements(
 *  "flex flex-col items-center text-center",
 *  AppTitle,
 *  Legend,
 *  recordOtherGIF,
 *  seeOtherUsersGIFsButton,
 *  Footer
 *  );
 * ```
 */
export function wrapElements(
  classes?: string | HTMLElement,
  ...elements: HTMLElement[]
) {
  const firstIsElement = classes instanceof HTMLElement &&
    !(typeof classes === "string");

  return addToElement(
    createElement("div", { classes: firstIsElement ? undefined : classes }),
    firstIsElement ? [classes, ...elements] : elements,
  );
}

// TODO (ultirequiem): Should be a better way to do this 🤔
