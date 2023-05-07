import ApiResponse from "./api-response";

export default function apiResponse<T>(status: boolean = true, data: T, message: string = "Success", issues: any = null): ApiResponse<T> {
    return {
        status,
        data,
        message,
        issues,
        'version': '1.0',
        'versionedBy': 'ModestNerds, Co'
    }
}