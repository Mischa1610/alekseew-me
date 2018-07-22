import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppApiModule } from '@app/app-api.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app/app.component';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        CoreModule,
        SharedModule,
        AppApiModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
    /* NO PROVIDERS HERE! ALL SERVICES SHOULD BE IN PROVIDED-IN APP-API.MODULE*/
})
export class AppModule {}
