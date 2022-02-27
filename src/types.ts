/**
 * Available Options for a Kumero Element
 */
export interface EleOptions<E extends HTMLElement> {
  classes?: string[] | string;
  attributes?: Record<string, string | boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  functions?: Record<string, (this: E, ...args: any[]) => unknown>;
}

export type FindOptions<T extends keyof HTMLElementTagNameMap> = EleOptions<
  HTMLElementTagNameMap[T]
>;

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
