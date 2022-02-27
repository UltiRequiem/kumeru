/**
 * Most Important URIS
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#important_namespace_uris}
 */
export enum ValidURIS {
  HTML = "http://www.w3.org/1999/xhtml",
  MATHML = "http://www.w3.org/1998/Math/MathML",
  SVG = "http://www.w3.org/2000/svg",
}

// TODO: this is just a wrapper right now
export function createNSElement(uri: ValidURIS, tag: string): Element {
  return document.createElementNS(uri, tag);
}
