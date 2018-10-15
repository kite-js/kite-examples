import { Kite } from 'kite-framework';
import { Logger } from './middlewares/logger';
import { StartupService } from './startup.service';

new Kite('./kite.config')
    .use(new Logger())      // a middleware demonstration
    .watch()                // let application works in watch mode, any changes to controllers/services/models will cause reload
    .start(StartupService)
    .fly(4001);                 // now kite can fly
