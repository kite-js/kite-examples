import { Controller, Entry } from 'kite-framework';

@Controller()
export class TypesController {
    @Entry()
    async exec(str: string, num: number, bool: boolean, date: Date = undefined) {
        console.log('typeof "str" is', typeof str);
        console.log('typeof "num" is', typeof num);
        console.log('typeof "bool" is', typeof bool);
        console.log('typeof "date" is', typeof date, ', "date" is instance of "Date":', date instanceof Date);

        return { values: { str, num, bool, date } };
    }
}
