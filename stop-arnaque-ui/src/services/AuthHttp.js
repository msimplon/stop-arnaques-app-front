import { http } from './http-common';

export class AuthHttp {

    async register(payload) {
        const url = `/users`;
        const response = await http.post(url, payload);
        return response;
    };

    async login(payload) {
        const url = `/users/sign-in`;
        const response = await http.post(url, payload);
        return response;
    }

}