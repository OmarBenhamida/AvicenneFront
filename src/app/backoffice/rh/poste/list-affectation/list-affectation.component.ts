import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Affectation } from 'src/app/models/Affectations.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { Post } from 'src/app/models/Posts.models';
import { AffectationService } from 'src/app/shared/affectation.service';
import { PersonnelService } from 'src/app/shared/personnel.service';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.css','../../../assets/fonts/fontawesome-all.min.css',
  '../../../assets/fonts/font-awesome.min.css',
  '../../../assets/fonts/fontawesome5-overrides.min.css',]
})
export class ListAffectationComponent implements OnInit {

  id: number;
  dateDebut: string;
  dateFin: string;
  t: Affectation[] = [];
  idpersonnel: number;
  idpost: number;
  post: Post
  personnel: Personnel;
  affectationModifie: Affectation = Object();




  constructor(public service: AffectationService, public uow: PersonnelService, public wow: PostService, private router: Router) { }

  ngOnInit(): void {

    this.service.affectation = {
      id: 0,
      dateDebut: "",
      dateFin: "",
      idpost: 0,
      idpersonnel: 0,
      personnel: new Personnel,
      post: new Post


    },

    this.getall();
    this.uow.getall();
    this.wow.getall();



  }
  getall() {

    this.service.getall().subscribe(r => {
      this.service.affectations = r as any;
      this.t = r as any;
      console.log(r);
    });
  }







  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.getall();
      this.uow.getall();
    },
      err => {
        console.log(err);
      }
    );
  }
  search(id: number) {

    this.service.get(id).subscribe(res => {


    },
      err => {
        console.log(err);
      }
    );

  }
  selectionChange() {
    // this.t = this.service.affectations;
    // this.service.affectations = [];
    this.t = this.service.affectations.filter(e => +e.idpersonnel === +this.service.affectation.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/affectation/details', +this.service.affectation.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/affectation/details', +this.service.affectation.id]);


  }




}

