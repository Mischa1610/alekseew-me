import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public readonly appVersion = environment.appVersion;
    public readonly envName = environment.envName;
    public readonly isProduction = environment.production;

    public title = '@alekseew/me - About me - Michael Alekseew';

    public lottieConfig: {};
    public animationSpeed = 1;

    private animation: any;

    constructor() {
        this.lottieConfig = {
            path: 'assets/under_construction_animation.json',
            autoplay: true,
            loop: true
        };
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
