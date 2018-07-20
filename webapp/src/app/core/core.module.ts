import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreApiModule } from '@core/core-api.module';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
    imports: [CommonModule, CoreApiModule, LottieAnimationViewModule.forRoot()],
    declarations: [],
    exports: []
    /* NO PROVIDERS HERE! ALL SERVICES SHOULD BE IN PROVIDED-IN CORE-API.MODULE*/
})
export class CoreModule {}
