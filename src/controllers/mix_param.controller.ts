import { Controller, Entry, KiteError, Inject } from 'kite-framework';

/**
 * # param API
 */
@Controller()
export class MixParamController {
    /**
     * An example demonstrates required/optional parameters
     * 
     * If any parameter declared with a default value, it'll be
     * an optional parameter for client, else treated as required.
     * 
     * This example also demonstrates type conversions, parameter `age`
     * is declared as `number` type, any incoming data for this field will
     * be converted to number type by the framework.
     * 
     * @param name - required, a name to echo
     * @param age - optional, an age to echo
     */
    @Entry()
    async exec(name: string, age: number = undefined) {
        return { name, age };
    }
}
