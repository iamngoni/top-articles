import ApiResponse from "./api-response";
export default function apiResponse<T>(status: boolean | undefined, data: T, message?: string, issues?: any): ApiResponse<T>;
