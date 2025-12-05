export interface HttpErrors {
  code: number;
  message: string;
}
export interface HttpErrorsAndExceptions {
  exceptions: Array<number>;
  httpErrors?: Array<HttpErrors>;
}
