import { UserModel } from './../../models/user.model.rules';
import { Controller, Entry } from 'kite-framework';

/**
 * Create a user with model mapping
 */
@Controller()
export class UserGreateController {
    @Entry()
    async exec(user: UserModel) {
        // save user to database
        return { user };
    }
}
