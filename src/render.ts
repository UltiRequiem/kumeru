import { KumeruError } from "./errors.ts";
import { addToElement } from "./addToElement.ts";

/**
 * The entry point for the Kumeru library.
 *
 * @param  node - The node to render your app.
 * @param  app - The app to mount on id
 *
 * @example
 * ```javascript
 * render(document.getElementById("root"), App);
 * ```
 */
export function render<T extends HTMLElement>(node: T, app: T) {
  if (!node) {
    throw new KumeruError(`Could not render the app`);
  }

  addToElement(node, [app]);
}
