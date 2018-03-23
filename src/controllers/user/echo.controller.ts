import { Controller, Entry } from 'kite-framework';

@Controller()
export class EchoController {
    @Entry()
    async exec(name: string) {
        return { message: `Good day, ${name}!` };
    }
}
