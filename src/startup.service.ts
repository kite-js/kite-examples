import { Injectable, PostConstruct } from 'kite-framework';

@Injectable()
export class StartupService {
    /**
     * @since 0.5.7
     * 
     * This service is started in Kite startup stage, can be used as startup / schedule service.
     * 
     * Any injectable services can be inject into this service in case people need db / cache access.
     * 
     * This service is started from `app.server.ts`:
     * ```ts
     * new Kite().start(StartupService);
     * ```
     */
    @PostConstruct
    init() {
        console.log('This service is started in Kite startup stage, can be used as startup / schedule service')
    }
}
