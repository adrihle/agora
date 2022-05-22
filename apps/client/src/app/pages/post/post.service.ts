import { HttpService } from "@providers";

class Post extends HttpService {
    constructor(){
        super('/test')
    };

    async post(){
        return this.http.post('', { posted: true })
    }
};

export const HomeService = new Post();