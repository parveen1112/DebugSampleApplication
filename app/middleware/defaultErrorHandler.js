const codes = {
    304 : {
        httpCode: 304,
        response: {
            success: false,
            errors: [{
                code: 999,
                message: 'NOT MODIFIED'
            }]
        }
    },
    400: {
        httpCode: 400,
        response: {
            success: false,
            errors: [{
                code: 1000,
                message: 'BAD REQUEST'
            }]
        }
    },
    401: {
        httpCode: 401,
        response: {
            success: false,
            errors: [{
                code: 1001,
                message: 'NOT AUTHORIZED'
            }]
        }
    },
    403: {
        httpCode: 403,
        response: {
            success: false,
            errors: [{
                code: 1002,
                message: 'FORBIDDEN REQUEST'
            }]
        }
    },
    404: {
        httpCode: 404,
        response: {
            success: false,
            errors: [{
                code: 1003,
                message: 'RESOURCE NOT FOUND'
            }]
        }
    },
    500: {
        httpCode: 500,
        response: {
            success: false,
            errors: [{
                code: 1004,
                message: 'INTERNAL SERVER ERROR'
            }]
        }
    },
    501: {
        httpCode: 501,
        response: {
            success: false,
            errors: [{
                code: 1005,
                message: 'BAD GATEWAY'
            }]
        }
    },
    502: {
        httpCode: 500,
        response: {
            success: false,
            errors: [{
                code: 1005,
                message: 'SERVICE UNAVAILABLE'
            }]
        }
    },
    503: {
        httpCode: 500,
        response: {
            success: false,
            errors: [{
                code: 1006,
                message: 'SERVICE UNAVAILABLE'
            }]
        }
    },
    504: {
        httpCode: 500,
        response: {
            success: false,
            errors: [{
                code: 1007,
                message: 'HTTP VERSION NOT SUPPORTED'
            }]
        }
    },
    511: {
        httpCode: 511,
        response: {
            success: false,
            errors: [{
                code: 1008,
                message: 'NETWORK AUTHENTICATION REQUIRED'
            }]
        }
    }
};

const errors = (err, req, res, next) => {
    const { errorCode: code = 500, message } = err;
    console.error("Default Error Handler", err, req.url);
    const errorResponse = codes[+code] || { success: false };
    return res.status(+code).send(errorResponse);
};

module.exports = errors;
