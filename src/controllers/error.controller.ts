import { Controller, Entry, KiteError } from 'kite-framework';

@Controller()
export class ErrorController {
    /**
     * Example of custom error message.
     * 
     * This example shows how to end a controller if meet a condition, 
     * the basic way is throws a `KiteError` like:
     * 
     * ```ts
     * if (condition) {
     *      throw new KiteError(code);
     * }
     * ```
     * 
     * Kite framework handles all errors thrown by the controller, if
     * a `KiteError` instance is thrown, Kite will locate the error message
     * by given `code` from file error code definition file `src/errors.ts`. For example:
     * 
     * ```ts
     * if (error) {
     *      throw new KiteError(2000);
     * }
     * ```
     * 
     * will cause Kite to locate code `2000` from file `errors.ts`:
     * 
     * ```ts
     * {
     *      2000: 'some error message',
     *      2001: 'another error message',
     * }
     * ```
     * 
     * and finally, client will get a JSON like:
     * 
     * ```json
     * {
     *       "error": {
     *           "code": 2000,
     *           "msg": "some error message"
     *       }
     *   }
     * ```
     * 
     * "error code" can be either a number or a string - a valid object key in JavaScript - 
     * but cant not be a [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ,
     * so this is a valid and more readable way to ends a Kite controller:
     * 
     * controller:
     * ```ts
     * if (error) throw new KiteError('error code');
     * ```
     * 
     * error definition:
     * ```ts
     * {
     *      'error code': 'The error message'
     * }
     * ```
     * 
     * ## notice
     * Error code `1000 ~ 1999` is being used / reserved by Kite, custom error using these codes 
     * will overwrite Kite framework errors. 
     * 
     * ## shorter way
     * Please refer to [Error example 2](./error2.controller.ts) for another way to throw an error.
     * 
     * @param msg - a message to display
     */
    @Entry()
    async exec(msg: string = undefined) {
        // ends if msg is empty
        if (!msg) {
            throw new KiteError('empty message');
        }
        // else return success message
        return { msg };
    }
}
