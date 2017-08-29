import { Injectable } from 'kite-framework';

@Injectable()
export class CounterService {
    private _counter = 0;

    inc() {
        this._counter++;
    }

    get counter(): number {
        return this._counter;
    }
}
