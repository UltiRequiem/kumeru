/**
An utility to add Styles to an element.

@param element - The element to add the styles to.
@param styles - An object with the styles you want to apply to the element.

@returns  The same element with the styles applied.

@example
```
import { addCSS } from "kumeru"

addCSS(app, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});
```
*/
export function addCSS<E extends HTMLElement>(
  element: E,
  styles: Partial<CSSStyleDeclaration>,
): E {
  Object.assign(element.style, styles);
  return element;
}
