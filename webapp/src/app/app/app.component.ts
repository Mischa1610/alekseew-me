import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '@env/environment';
import { unsubscribe } from '@utils/rxjs.helpers';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public readonly appVersion = environment.appVersion;
    public readonly envName = environment.envName;
    public readonly isProduction = environment.production;

    public title = '@alekseew/me - About me - Michael Alekseew';

    public lottieConfig: {};
    public animationSpeed = 1;

    private animation: any;

    private swUpdateAvailableSub!: Subscription;

    constructor(private swUpdate: SwUpdate) {
        this.lottieConfig = {
            path: 'assets/under_construction_animation.json',
            autoplay: true,
            loop: true
        };
    }

    ngOnInit() {
        if (this.swUpdate.isEnabled) {
            this.swUpdateAvailableSub = this.swUpdate.available.subscribe(() => {
                if (confirm('New version of the WebApp is available. Load new version?')) {
                    window.location.reload();
                }
            });
        }
    }

    ngOnDestroy() {
        unsubscribe(this.swUpdateAvailableSub);
    }

    public handleAnimation = (animation: any) => (this.animation = animation);

    public stop = () => this.animation.stop();

    public play = () => this.animation.play();

    public pause = () => this.animation.pause();

    public setSpeed = (speed: number) => {
        this.animationSpeed = speed;
        this.animation.setSpeed(speed);
    };
}
