import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../models/Absences.models';
import { Personnel } from '../models/Personnels.models';
import { User } from '../models/Users.models';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = 'http://localhost:5505/rest/users';
    users: User[];
    user: User;

    constructor(private http: HttpClient) { }


    get(id:number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
       // delete this.user.personnel;

        return this.http.post(this.url, this.user);
    }

    put() {
        //delete this.user.personnel;

        return this.http.put(this.url + '/' + this.user.id, this.user);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.user.id);
    }
}
