class ErrorResponseDTO {
  name: string;
  message: string;
  uri?: string;
  statusCode: number;
  constructor(name: string, message: string, statusCode: number, uri: string) {
    this.name = name;
    this.message = message;
    this.uri = uri;
    this.statusCode = statusCode;
  }
}

export class ApiError extends Error {
  statusCode: number;
  uri?: string;
  errorMessage: string;
  constructor(payload: ErrorResponseDTO) {
    super(payload.message);
    this.name = payload.name;
    this.statusCode = payload.statusCode;
    this.errorMessage = payload.message;
    this.uri = payload.uri;
    Error.captureStackTrace(this);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: ErrorResponseDTO) {
    super(message);
  }
}

export class NoExempleFoundError extends ApiError {
  constructor(id: string) {
    super({
      statusCode: 404,
      name: "NoExempleFoundError",
      message: `Exemple with id : ${id} not found`,
      uri: `/exemples/${id}`,
    });
  }
}

export class BadRequestError extends ApiError {
  constructor() {
    super({
      statusCode: 400,
      name: "BadRequestError",
      message: "Bad Request",
    });
  }
}
export class InternalServerError extends ApiError {
  constructor() {
    super({
      statusCode: 500,
      name: "InternalServerError",
      message: "Internal Server Error",
    });
  }
}
