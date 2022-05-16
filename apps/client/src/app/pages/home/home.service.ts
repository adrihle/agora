import { HttpService } from "@providers";

class Home extends HttpService {
    constructor(){
        super('/test')
    };

    async get(){
        return this.http.get('');
    };

    async post(){
        return this.http.post('', { posted: true })
    }
};

export const HomeService = new Home();