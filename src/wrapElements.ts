import { addToElement, createElement } from ".";

/**
Utility to wrap elements on a div with custom classes.

@param classes - The classes to add to the div.
@param children - The children to add to the div.

@returns The elements wrapped on a div.

@example
```
const App = wrapElements(
  "flex flex-col items-center text-center",
  AppTitle,
  Legend,
  recordOtherGIF,
  seeOtherUsersGIFsButton,
  Footer
);
```
*/
export function wrapElements(
  classes?: string | HTMLElement,
  ...elements: HTMLElement[]
) {
  const firstIsElement =
    classes instanceof HTMLElement && !(typeof classes === "string");

  return addToElement(
    createElement("div", { classes: firstIsElement ? undefined : classes }),
    firstIsElement ? [classes, ...elements] : elements
  );
}
