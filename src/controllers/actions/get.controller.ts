import { Controller, Entry, KiteError, Inject } from 'kite-framework';
import { Actions } from '../../models/actions.model';

@Controller()
export class GetController {
    @Entry()
    async exec(actions: Actions) {
        return actions;
    }
}
