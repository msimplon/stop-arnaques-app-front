import axios from 'axios';

export class HttpBase {
    constructor() {
        this.http = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            validateStatus: (status) => {
                return ACCEPTED_STATUS.includes(status);
            }
        });

        this.http.interceptors.response.use((response) => {
            const status = response.status;
            const data = response.data;
            const body = data !== '' ? data : null;
            return { status: status, body: body };
        }, (error) => {
            return Promise.reject(error);
        });
    }
}

const ACCEPTED_STATUS = [200, 201, 202, 204, 400, 404];

export default {
    install: (app) => {
        const httpBase = new HttpBase();
        app.config.globalProperties.$http = httpBase.http;
    }
};
