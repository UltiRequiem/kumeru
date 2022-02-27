/**
A custom Error Wrapper for the Kumeru library.

@param message - The message of the Error.
*/
export class KumeruError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "KumeruError";
  }
}
