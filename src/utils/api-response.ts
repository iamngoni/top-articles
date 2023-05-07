export interface ApiResponse<T> {
    status: boolean;
    data: T;
    message: string;
    issues: any;
    version: string;
    versionedBy: string;
}