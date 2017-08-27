import { UserModel } from './../../model/user.model';
import { Controller, Entry } from 'kite-framework';

/**
 * Create a user with model mapping
 */
@Controller()
export class UserGreateController {
    @Entry()
    async exec(_id: number, user: UserModel) {
        // todo: get data from db
        // todo: update user to database
        console.log("_id = ", _id);
        console.log("user = ", user);
        user._id = _id;
        return { user };
    }
}
