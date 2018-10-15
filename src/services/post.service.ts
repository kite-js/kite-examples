import { Injectable, PostConstruct } from 'kite-framework';

@Injectable()
export class PostService {
    @PostConstruct
    init() {
        return Promise.resolve('post cunstructor')
    }
}
