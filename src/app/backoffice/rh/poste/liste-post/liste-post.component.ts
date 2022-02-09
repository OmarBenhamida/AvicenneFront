import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Posts.models';
import { Service } from 'src/app/models/Services.models';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-liste-post',
  templateUrl:'./liste-post.component.html',
  styleUrls: ['./liste-post.component.css','../../../assets/fonts/fontawesome-all.min.css',
  '../../../assets/fonts/font-awesome.min.css',
  '../../../assets/fonts/fontawesome5-overrides.min.css',]

})
export class ListePostComponent implements OnInit {

 
  id: number;
  libelle: string;
  salairehoraire: number;
  service: string;

  t: Post[] = [];

  postModifie : Post = Object();

 // personnel = this.uow.get(this.id);

  constructor(public servicee: PostService, private router : Router) { }

  ngOnInit(): void {

    this.servicee.poste = {

      id: 0,
      libelle: "",
      salairehoraire: 0,
      service: "",



    },

    this.getall();

  }
  getall() {

    this.servicee.getall().subscribe(r => {
      this.servicee.posts = r as any;
      this.t = r as any;
      console.log(r);
    });
  }


  submit() {
    console.log();
    this.servicee.post().subscribe(res => {
      this.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.servicee.put().subscribe(res => {
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.servicee.delete().subscribe(res => {
      this.getall();
          },
      err => {
        console.log(err);
      }
    );
  }
  search(id : number) {

    this.servicee.get(id).subscribe(res => {


    },
      err => {
        console.log(err);
      }
    );

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/post/details', +this.servicee.poste.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/post/details', +this.servicee.poste.id]);


  }




}

