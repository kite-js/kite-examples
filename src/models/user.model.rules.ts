
import { Model, In } from 'kite-framework';

@Model()
export class UserModel {
    _id: number;

    @In({
        required: true,
        min: 3,
        max: 60
    })
    name: string;

    @In({
        required: true,
        min: 6
    })
    password: string;

    @In({
        pattern: /^[a-z\d_\.\-]+@[a-z\d_\.\-]+\.[a-z]{2,}$/i
    })
    email: string;

    @In()
    dateOfBirth: Date;

    createdTime: Date;
}
