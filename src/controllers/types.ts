import { Controller, Entry } from 'kite-framework';

@Controller()
export class TypesController {
    @Entry()
    async exec(str: string, num: number, bool: boolean, date: Date) {
        return { values: { str, num, bool, date } };
    }
}
