import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../models/Absences.models';
import { Personnel } from '../models/Personnels.models';
import { Demande } from '../models/Demandes.models';



@Injectable({
    providedIn: 'root'
})
export class DemandeService {
    url = 'http://localhost:5505/rest/demandes';
    demandes: Demande[];
    demande: Demande;

    constructor(private http: HttpClient) { }


    get(id:number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
       // delete this.demande.personnel;

        return this.http.post(this.url, this.demande);
    }

    put() {
        //delete this.demande.personnel;

        return this.http.put(this.url + '/' + this.demande.id, this.demande);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.demande.id);
    }
}
