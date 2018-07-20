import { AppApiModule } from './app-api.module';

describe('AppApiModule', () => {
    let appApiModule: AppApiModule;

    beforeEach(() => {
        appApiModule = new AppApiModule();
    });

    it('should create an instance', () => {
        expect(appApiModule).toBeTruthy();
    });
});
