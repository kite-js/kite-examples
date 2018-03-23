import { Controller, Entry, KiteError, Inject } from 'kite-framework';

/**
 * GreetController API
 * 
 * A "Hello world!" example
 */
@Controller()
export class GreetController {
    @Entry()
    async exec() {
        return { msg: "Hello world!" };
    }
}
