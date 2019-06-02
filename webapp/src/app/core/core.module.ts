import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
    imports: [CommonModule, LottieAnimationViewModule.forRoot()],
    declarations: [],
    exports: []
    /* NO PROVIDERS HERE! ALL SERVICES SHOULD BE IN PROVIDED-IN CORE-API.MODULE*/
})
export class CoreModule {}
