import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Affectation } from '../models/Affectations.models';
import { Personnel } from '../models/Personnels.models';



@Injectable({
    providedIn: 'root'
})
export class AffectationService {
    url = 'http://localhost:5505/rest/affectation';
    affectations: Affectation[];
    affectation: Affectation;


    constructor(private http: HttpClient) { }



    get(id: number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
       return this.http.get(this.url);
    }

    post() {
      return this.http.post(this.url, this.affectation);

  }


    put() {
       // delete this.affectation.personnel;

        return this.http.put(this.url + '/' + this.affectation.id, this.affectation);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.affectation.id);
    }
}
