// templates for controller & model & service, you can change these templates to meet your requirements
// for example add licencing comments
const controllerTemplate = 
`import { Controller, Entry, KiteError, Inject } from 'kite-framework';

@Controller()
export class $NAME$Controller {
    @Entry()
    async exec() {
        throw new KiteError(1000, 'this api is not implemented');
    }
}
`;
const modelTemplate = 
`import { Model, In } from 'kite-framework';

@Model()
export class $NAME$ {
    // put your code here
}
`;
const serviceTemplate = 
`import { Injectable } from 'kite-framework';

@Injectable()
export class $NAME$Service {
    // put your code here
}
`;


const config = {
    cliVersion: "0.3.0",
    controller: {
        folder: "src/controllers",
        template: controllerTemplate
    },
    model: {
        folder: "src/models",
        template: modelTemplate
    },
    service: {
        folder: "src/services",
        template: serviceTemplate
    },
};

module.exports = config