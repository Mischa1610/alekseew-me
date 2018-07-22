import { Subscription } from 'rxjs';

export const unsubscribe = (...subscriptions: Subscription[]) => {
    subscriptions.forEach((sub: Subscription) => {
        if (!!sub && !sub.closed) {
            sub.unsubscribe();
        }
    });
};
