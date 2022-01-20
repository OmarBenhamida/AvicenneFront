import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeConge } from '../models/Demandeconges.models';


@Injectable({
    providedIn: 'root'
})
export class DemandeCongeService {
    url = 'http://localhost:5505/rest/demandeconges';
   demandeconges: DemandeConge[];
    demandeconge: DemandeConge;

    constructor(private http: HttpClient) { }


    get(id : number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url + '/getAll') .toPromise().then(
            res => {
                this.demandeconges = res as DemandeConge[];
                console.log(res);
            }
        );
    }

    post() {
        console.log(this.demandeconge)
       // delete this.demandeconge.personnel;
        return this.http.post(this.url, this.demandeconge);
    }

    put() {
        //delete this.demandeconge.personnel;

        return this.http.put(this.url + '/' + this.demandeconge.id, this.demandeconge);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.demandeconge.id);
    }
}
