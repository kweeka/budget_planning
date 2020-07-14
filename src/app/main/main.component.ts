import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    private routeSubscription: Subscription;
    constructor(private route: ActivatedRoute){
        this.routeSubscription = route.params.subscribe();
    }
}
