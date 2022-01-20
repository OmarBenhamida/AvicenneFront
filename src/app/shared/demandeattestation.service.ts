import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeConge } from '../models/Demandeconges.models';
import { DemandeFichepaie } from '../models/Demandefichepaies.models';
import { DemandeAttestation } from '../models/Demandeattestations.models';


@Injectable({
    providedIn: 'root'
})
export class DemandeAttestationService {
    url = 'http://localhost:5505/rest/demandeAttestations';
   demandeAttestations: DemandeAttestation[];
    demandeAttestation: DemandeAttestation;

    constructor(private http: HttpClient) { }


    get(id : number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        this.http.get(this.url + '/getAll') .toPromise().then(
            res => {
                this.demandeAttestations = res as DemandeAttestation[];
                console.log(res);
            }
        );
    }

    post() {
        console.log(this.demandeAttestation)
       // delete this.demandeAttestation.personnel;
        return this.http.post(this.url, this.demandeAttestation);
    }

    put() {
        //delete this.demandeAttestation.personnel;

        return this.http.put(this.url + '/' + this.demandeAttestation.id, this.demandeAttestation);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.demandeAttestation.id);
    }
}
