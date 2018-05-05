import { Controller, Entry, KiteError, Inject } from 'kite-framework';

@Controller()
export class InputToObjController {
    @Entry()
    async exec() {
        throw new KiteError(1000, 'this api is not implemented');
    }
}
