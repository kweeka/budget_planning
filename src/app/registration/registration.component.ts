import { Component, Input } from '@angular/core';
import {UserService} from '../services/user.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [UserService]
})
export class RegistrationComponent {
    @Input() userName: string;
    @Input() userPassword: string;
    @Input() userEmail: string;

    constructor(private httpService: UserService){}
registration(){
        this.httpService.registration(this.userName, this.userEmail, this.userPassword)
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
