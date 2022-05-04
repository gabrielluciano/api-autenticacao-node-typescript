export default class ValidationError extends Error {
  
  private httpStatusCode;

  constructor(message: string, httpStatusCode: number) {
    super(message);
    this.message = message;
    this.name = "ValidationError";
    this.httpStatusCode = httpStatusCode;
  }

  public getHttpStatusCode(): number {
    return this.httpStatusCode;
  }

}