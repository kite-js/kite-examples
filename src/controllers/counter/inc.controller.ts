import { CounterService } from './../../services/counter.services';
import { Controller, Entry, Inject } from 'kite-framework';
import { PostService } from '../../services/post.service';

/**
 * increase counter value
 */
@Controller()
export class CounterIncController {
    // inject counter service
    @Inject() counterService: CounterService;
    @Inject() postService: PostService;

    @Entry()
    async exec() {
        this.counterService.inc();
        return { success: true };
    }
}
