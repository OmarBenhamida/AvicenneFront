import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../models/Personnels.models';
import { Retard } from '../models/Retards.models';



@Injectable({
    providedIn: 'root'
})
export class RetardService {
    url = 'http://localhost:5505/rest/retard';
    retards: Retard[];
    retard: Retard;

    constructor(private http: HttpClient) { }


    get(id: number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
       return this.http.get(this.url);
    }

    post() {
      return this.http.post(this.url, this.retard);

  }


    put() {
       // delete this.retard.personnel;

        return this.http.put(this.url + '/' + this.retard.id, this.retard);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.retard.id);
    }
}
