import { Kite, Provider, Injectable } from 'kite-framework';
import { Logger } from './middlewares/logger';

new Kite('./kite.config')
    .use(new Logger())      // a middleware demonstration
    .watch()                // let application works in watch mode, any changes to controllers/services/models will cause reload
    .fly(4001);                 // now kite can fly
