import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../models/Personnels.models';
import { Post } from '../models/Posts.models';
import { Affectation } from '../models/Affectations.models';
import { Absence } from '../models/Absences.models';
import { Retard } from '../models/Retards.models';

@Injectable({
    providedIn: 'root'
})
export class FichePaieService {

    url = 'http://localhost:8000/api';
    o = {
        mois: 0,
        annee: 0,
        idemploye: 0,
        personnel: Personnel,
        post: Post,
        abs: 0,
        rts: 0,
      }

    constructor(private http: HttpClient) { }

    get(id : number) {
        return this.http.get<Affectation>(this.url + '/affectation/getPostByIdemploye/' + id);
    }

    countAbsByUser(month : number, id : number) {
        return this.http.get<number>(this.url + '/absences/countAbsByUser/' + month + '/' + id);
    }

    sumAbsByUser(month : number, id : number) {
        return this.http.get<number>(this.url + '/retards/sumAbsByUser/' + month + '/' + id);
    }

}
