import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conge } from "../models/Conges.models";

@Injectable({
    providedIn: 'root'
})
export class CongeService {
    url = 'http://localhost:8000/api/conges';
    conges: Conge[];
    conge: Conge;

    constructor(private http: HttpClient) { }


    get(id: number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
       return this.http.get(this.url + '/getAll');
    }

    post() {
      //  delete this.conge.personnel;

        console.log(this.conge)
        return this.http.post(this.url, this.conge);
    }

    put() {
       // delete this.conge.personnel;

        return this.http.put(this.url + '/' + this.conge.id, this.conge);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.conge.id);
    }
}