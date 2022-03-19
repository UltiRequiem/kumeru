/**
 * A custom Error Wrapper for Kumeru.
 * @param message - The error message.
 */
export class KumeruError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "KumeruError";
  }
}
