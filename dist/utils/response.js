"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apiResponse(status = true, data, message = "Success", issues = null) {
    return {
        status,
        data,
        message,
        issues,
        'version': '1.0',
        'versionedBy': 'ModestNerds, Co'
    };
}
exports.default = apiResponse;
