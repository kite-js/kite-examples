import { Controller, Entry, KiteError, Inject } from 'kite-framework';

/**
 * # welcome API
 * 
 */
@Controller()
export class WelcomeController {
    /**
     * An example that show how to accept client data, by declaring parameters in 
     * `exec()` function (called entry point in KiteJS), these parameters are mapped
     * to request (GET/POST) form data.
     * 
     * In these example, this API accepts
     * a parameter "name", which type is string (declared type), if you ommit from request
     * URL, you will get an error message.
     * 
     * __TEST URL__
     * 
     * http://localhost:4000/welcome?name=Kite
     * 
     * __RESULT__
     * ```json
     * {"msg":"Hello, Kite!"}
     * ```
     * 
     * @param name - name that display in welcome message
     */
    @Entry()
    async exec(name: string) {
        return { msg: `Hello, ${name}!` };
    }
}
