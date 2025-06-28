import { HTTPSTATUS, HttpStatusCodeType } from "../config/http.config.js";
import { ErrorCodeEnum, ErrorCodeEnumType } from "../enums/error-code.js";

export class AppError extends Error {
    public statusCode: HttpStatusCodeType;
    public errorCode?: ErrorCodeEnumType;

    constructor(
        message: string,
        statusCode: HttpStatusCodeType,
        errorCode?: ErrorCodeEnumType
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class InternalServerException extends AppError {
    constructor(
        message: string = "Internal Server Error",
        errorCode: ErrorCodeEnumType = ErrorCodeEnum.INTERNAL_SERVER_ERROR
    ) {
        super(message, HTTPSTATUS.INTERNAL_SERVER_ERROR, errorCode);
    }
}

export class BadRequestException extends AppError {
    constructor(
        message: string = "Bad Request",
        errorCode: ErrorCodeEnumType = ErrorCodeEnum.VALIDATION_ERROR
    ) {
        super(message, HTTPSTATUS.BAD_REQUEST, errorCode);
    }
}

export class NotFoundException extends AppError {
    constructor(
        message: string = "Resource Not Found",
        errorCode: ErrorCodeEnumType = ErrorCodeEnum.RESOURCE_NOT_FOUND
    ) {
        super(message, HTTPSTATUS.NOT_FOUND, errorCode);
    }
}

export class UnauthorizedException extends AppError {
    constructor(
        message: string = "Unauthorized Access",
        errorCode: ErrorCodeEnumType = ErrorCodeEnum.ACCESS_UNAUTHORIZED
    ) {
        super(message, HTTPSTATUS.UNAUTHORIZED, errorCode);
    }
}
