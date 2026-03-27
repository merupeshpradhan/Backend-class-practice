class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad Request") {
    return new ApiError(400, message);
  }

  static unauthorized(message = "unauthorized") {
    return new ApiError(400, message);
  }

  static conflict(message = "conflict") {
    return new ApiError(400, message);
  }

  static forbidden(message = "forbidden") {
    return new ApiError(400, message);
  }

  static notfound(message = "notfound") {
    return new ApiError(400, message);
  }
}

export default ApiError;
