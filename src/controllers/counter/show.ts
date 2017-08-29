import { CounterService } from './../../services/counter.services';
import { Controller, Entry, Inject } from 'kite-framework';

/**
 * show counter value
 */
@Controller()
export class CounterShowController {
    // inject counter service
    @Inject() counterService: CounterService;

    @Entry()
    async exec() {
        return { counter: this.counterService.counter };
    }
}
