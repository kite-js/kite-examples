import { UserModel } from './../../model/user.model';
import { Controller, Entry } from 'kite-framework';

@Controller()
export class GreetingController {
    @Entry()
    async exec(user: UserModel) {
        return { user };
    }
}
