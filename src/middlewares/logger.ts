import { IncomingMessage, ServerResponse } from 'http';
import { Middleware } from 'kite-framework';

/**
 * class Logger
 * 
 * A KiteJS middleware example, logs urls of incoming requests
 */
export class Logger implements Middleware {
    exec(request: IncomingMessage, response: ServerResponse, controller: Function, inputs: any) {
        // output request.url
        console.log('[ logger ] request for ', request.url);
    }
}
