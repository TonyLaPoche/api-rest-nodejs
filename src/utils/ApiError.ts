import { typeToFlattenedError } from "zod";

export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string | any) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = "Not Found") {
    super(404, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string | typeToFlattenedError<{}>) {
    super(400, message);
  }
}
export class InternalServerError extends ApiError {
  constructor(message: string = "Internal Server Error") {
    super(500, message);
  }
}
