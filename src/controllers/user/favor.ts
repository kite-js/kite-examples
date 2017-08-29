import { Controller, Entry } from 'kite-framework';

/**
 * Create a user with model mapping
 */
@Controller()
export class UserFavorController {
    @Entry({
        // define rule for "name" parameter
        name: {
            min: 3
        },

        // define name for "language" parameter
        language: {
            values: ['Java', 'Javascript', 'PHP', 'GO', 'Python']
        }
    })
    async exec(name: string, language: string) {
        let msg = `${name}'s favor programming language is ${language}`;
        return { msg };
    }
}
