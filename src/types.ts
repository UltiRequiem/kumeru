/**
 * Available Options for a Kumeru Element
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
