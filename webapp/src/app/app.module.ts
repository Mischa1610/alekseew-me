import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';
import { AppApiModule } from './app-api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        CoreModule,
        SharedModule,
        AppApiModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
    /* NO PROVIDERS HERE! ALL SERVICES SHOULD BE IN PROVIDED-IN APP-API.MODULE*/
})
export class AppModule {}
