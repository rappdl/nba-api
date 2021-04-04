module.exports = {
    //4xx
    BAD_REQUEST: {
        message: 'This username or email already exist',
        statusCode: 400
    },

    MISSING_ARGUMENT: {
        message: 'Invalid argument',
        statusCode: 400
    },

    MIN_GREATER_THAN_MAX: {
        message: 'Min is greater than max',
        statusCode: 400
    },

    MIN_OR_MAX_INVALID: {
        message: 'Min and max must be between 0 and 100',
        statusCode: 400
    },

    UNAUTHORIZED: {
        message: 'Invalid credentials',
        statusCode: 401
    },

    NOT_MODIFIED: {
        message: 'Resource not modified',
        statusCode: 403
    },

    RESOURCE_NOT_FOUND: {
        message: 'Resource not found',
        statusCode: 404
    },

    //5xx
    SERVICES_UNAVAILABLE:{
        message: 'The server cannot handle the request',
        statusCode: 500
    },

    BAD_GATEWAY: {
        message: 'Internal server error',
        statusCode: 502
    }
}