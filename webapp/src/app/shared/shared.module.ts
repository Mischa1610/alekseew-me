import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
    imports: [CommonModule, LottieAnimationViewModule],
    declarations: [],
    exports: [CommonModule, LottieAnimationViewModule]
    /* NO PROVIDERS HERE! ALL SERVICES SHOULD BE IN PROVIDED-IN SHARED-API.MODULE*/
})
export class SharedModule {}
