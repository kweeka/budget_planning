import { Component, Input } from '@angular/core';
import {UserService} from '../services/user.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['../registration/registration.component.css'],
    providers: [UserService]
})
export class AuthComponent {
    @Input() userEmail: string;
    @Input() userPassword: string;

    constructor(private httpService: UserService){}
    authorization(){
        this.httpService.authorization(this.userEmail, this.userPassword)
            .pipe(tap(
                data => {
                    console.log(data);
                },
                e => {
                    console.log(e);
                },
                () => {
                    console.log(1);
                }
            ))
            .subscribe(
                data => {
                    console.log(data);
            });
    }
}
