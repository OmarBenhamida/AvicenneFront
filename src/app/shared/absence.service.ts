import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../models/Absences.models';
import { Personnel } from '../models/Personnels.models';



@Injectable({
    providedIn: 'root'
})
export class AbsenceService {
    url = 'http://localhost:5505/rest/absence';
    absences: Absence[];
    absence: Absence;


    constructor(private http: HttpClient) { }


    get(id:number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url );
     }

    post(idp:string) {
        return this.http.post(this.url+"/add/"+idp, this.absence);
    }

    put() {
        //delete this.absence.personnel;

        return this.http.put(this.url + '/' + this.absence.id, this.absence);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.absence.id);
    }
}
