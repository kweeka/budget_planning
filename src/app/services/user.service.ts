import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable ()

export class UserService {
    constructor(private http: HttpClient){}
    authorization(userEmail: string, userPassword: string) {
        const body = {email: userEmail, password: userPassword};
        console.log(3);
        return this.http.post('http://mail-backend.agafonov.me/api/v1/auth/login', body);
    }
    registration(userName: string, userEmail: string, userPassword: string) {
        const body = {name: userName, email: userEmail, password: userPassword};
        return this.http.post('http://mail-backend.agafonov.me/api/v1/auth/login', body);
    }
}




