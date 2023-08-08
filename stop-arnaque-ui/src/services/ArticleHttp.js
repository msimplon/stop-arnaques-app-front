import { http } from './http-common';

export class ArticleHttp {

    async add_new_article() {
        const url = `/articles`;
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };
        const response = await http.post(url, config);
        return response;
    };

    async get_last_added_articles() {
        const url = `/articles`;
        const response = await http.get(url);
        return response;
    };


}
