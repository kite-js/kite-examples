import { Model, In } from 'kite-framework';

@Model()
export class Actions {
    @In({
        required: true,
        arrayType: {
            elementType: Number
        }
    })
    actions: Number[];
}
