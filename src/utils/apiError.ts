export default class ApiError extends Error {

    public statusCode: number;

    constructor(message) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = 422;
    }
}