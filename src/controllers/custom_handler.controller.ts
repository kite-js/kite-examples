import { Controller, Entry, KiteError, Inject, RequestHandler, ResponseHandler } from 'kite-framework';
import { IncomingMessage } from 'http';
import { ServerResponse } from 'http';
import { CounterService } from '../services/counter.services';

export class User {
    name: string;
}

@Controller()
export class CustomHandlerController implements RequestHandler {
    @Inject() counterService: CounterService;

    @Entry()
    async exec(msg: string, user: User) {
        this.counterService.inc();
        return { msg, user };
    }

    async onRequest(request: IncomingMessage, query: any): Promise<any> {
        return { msg: 'hello ' + (query.name || 'anonymous') };
    }
}
