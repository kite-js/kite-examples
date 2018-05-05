import { Controller, Entry, end } from 'kite-framework';

@Controller()
export class Error2Controller {
    /**
     * A shorter way to throw an error in controller.
     * 
     * The basic way is introduced at [Error example](./error.controller.ts), like this:
     * 
     * ```ts
     * if (error) {
     *      throw new KiteError(code);
     * }
     * ```
     * 
     * This example demonstrates an equivalent way to end a controller's processing, it's
     * shorter and more readable:
     * ```ts
     * if (error) end(code);
     * ```
     * 
     * If a string error code is give, for example 'user not exist', it looks like:
     * ```ts
     * if (error) end('user not exist');
     * ```
     * 
     * If [format string](https://nodejs.org/dist/latest-v10.x/docs/api/util.html#util_util_format_format_args) appears
     * in error message, it'll be replace by given substitution strings.
     * 
     * error definition:
     * ```ts
     * {
     *      'some error': 'Message: %s'
     * }
     * ```
     * 
     * controller:
     * ```ts
     * if (error) end('some error', 'error!');
     * ```
     * 
     * result:
     * ```json
     * {
     *      "error": {
     *            "code": "some error",
     *            "msg": "Message: error!"
     *      }
     * }
     * ```
     * 
     * ## Results of example:
     * 
     * - empty `msg`: [http://localhost:4000/error2](http://localhost:4000/error2)
     * ```json
     * {
     *	"error": {
     *		"code": "empty message"
     *	 }
     * }
     * ```
     * 
     * - nonempty `msg`: [http://localhost:4000/error2?msg=Hello](http://localhost:4000/error2?msg=Hello)
     * ```json
     * {
     * 	"error": {
     * 		"code": "custom error",
     * 		"msg": "Message: Hello, time: Sat May 05 2018 23:18:49 GMT+0800 (CST)"
     * 	}
     * }
     * ```
     * 
     * @param msg 
     */
    @Entry()
    async exec(msg: string = undefined) {
        if (!msg) end('empty message');
        else end('custom error', msg, new Date());
    }
}
