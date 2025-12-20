export interface IRes<T = any> {
    statusCode: string;
    statusMsgEn: string;
    statusMsgAr: string;
    data: T;
    timestamp: string;
}
export interface IPaginatedRes<T = any> {
    content: T[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
}
export interface IPaginationParam {
    page: number;
    size: number;
}
export interface IError {
    statusCode: string;
    error: {
        errorMessageEn: string;
        errorMessageAr: string;
    };
    timestamp: string;
}
