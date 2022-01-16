import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeConge } from '../models/Demandeconges.models';
import { DemandeFichepaie } from '../models/Demandefichepaies.models';


@Injectable({
    providedIn: 'root'
})
export class DemandefichepaieService {
    url = 'http://localhost:8000/api/demandefichepaies';
   demandefichepaies: DemandeFichepaie[];
    demandefichepaie: DemandeFichepaie;

    constructor(private http: HttpClient) { }


    get(id : number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url + '/getAll') .toPromise().then(
            res => {
                this.demandefichepaies = res as DemandeFichepaie[];
                console.log(res);
            }
        );
    }

    post() {
        console.log(this.demandefichepaie)
       // delete this.demandefichepaie.personnel;
        return this.http.post(this.url, this.demandefichepaie);
    }

    put() {
        //delete this.demandefichepaie.personnel;

        return this.http.put(this.url + '/' + this.demandefichepaie.id, this.demandefichepaie);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.demandefichepaie.id);
    }
}