import { addToElement, KumeruError } from "./mod.ts";

/**
The entry point for the Kumeru library.

@param  id - The ID of the element to mount your App to.
@param  app - The app to mount on id

@example
```
import { render } from "kumeru";

import App from "./app";

render("app", App);
```
*/
export function render<T extends HTMLElement>(id: string, app: T) {
  const container = document.querySelector<HTMLElement>(`#${id}`);

  if (!container) {
    throw new KumeruError(`Could not find element with ID ${id}`);
  }

  addToElement(container, [app]);
}
