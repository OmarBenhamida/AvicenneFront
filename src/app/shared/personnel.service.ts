import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../models/Personnels.models';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  url = 'http://localhost:5505/rest/personnel';
  personnels: Personnel[];
  personnel: Personnel;

  constructor(private http: HttpClient) { }


  get(id :  number) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.personnels = res as Personnel[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.personnel);
  }

  put() {
    return this.http.put(this.url + '/' + this.personnel.id, this.personnel);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.personnel.id);
  }

  getbyMatricule(Matricule : string) {
    return this.http.get(this.url + '/getbyMatricule/' + Matricule);

  }

  getbyCin(cin : string) {
    return this.http.get(this.url + '/getbyCin/' + cin);

  }

  usersGet(id : number) {
    return this.http.get(this.url + '/usersGet/' + id);

  }

  // getbyMatricule() {
  //   console.log(this.personnel.Marticule);
  //   this.http.get(this.url + '/getbyMatricule/' + this.personnel.Marticule).toPromise().then(
  //     res => {
  //       this.personnel = res as personnel;
  //     }
  //   );
  //   console.log(this.personnel.Prenom);

  // }

}
