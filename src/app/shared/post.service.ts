import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../models/Personnels.models';
import { Post } from '../models/Posts.models';



@Injectable({
    providedIn: 'root'
})
export class PostService {
    url = 'http://localhost:5505/rest/post';
    posts: Post[];
    poste: Post;

    constructor(private http: HttpClient) { }


    get(id:number) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    post() {
       // delete this.poste.personnel;

        return this.http.post(this.url, this.poste);
    }

    put() {
        //delete this.poste.personnel;

        return this.http.put(this.url + '/' + this.poste.id, this.poste);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.poste.id);
    }
}
