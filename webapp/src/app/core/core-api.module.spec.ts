import { CoreApiModule } from './core-api.module';

describe('CoreApiModule', () => {
    let coreApiModule: CoreApiModule;

    beforeEach(() => {
        coreApiModule = new CoreApiModule();
    });

    it('should create an instance', () => {
        expect(coreApiModule).toBeTruthy();
    });
});
