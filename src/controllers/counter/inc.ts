import { CounterService } from './../../services/counter.services';
import { Controller, Entry, Inject } from 'kite-framework';

/**
 * increase counter value
 */
@Controller()
export class CounterIncController {
    // inject counter service
    @Inject() counterService: CounterService;

    @Entry()
    async exec() {
        this.counterService.inc();
        return { success: true };
    }
}
