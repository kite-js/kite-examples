
import { Model, In } from 'kite-framework';

@Model()
export class UserModel {
    _id: number;

    @In({
        required: true
    })
    name: string;

    @In({
        required: true
    })
    password: string;

    @In()
    createdTime: Date = new Date();
}
