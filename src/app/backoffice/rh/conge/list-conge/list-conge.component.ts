import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/models/Conges.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { CongeService } from 'src/app/shared/conge.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.css','../../../assets/fonts/fontawesome-all.min.css',
  '../../../assets/fonts/font-awesome.min.css',
  '../../../assets/fonts/fontawesome5-overrides.min.css',]
})
export class ListCongeComponent implements OnInit {

  id: number;
  dateDebut: string;
  dateFin: string;
  motif: string;
  etat : number;
  t: Conge[] = [];
  idpersonnel: number;
  personnel : Personnel;

  congeModifie : Conge = Object();

 // personnel = this.uow.get(this.id);

  constructor(public service: CongeService, public uow: PersonnelService,private router : Router) { }

  ngOnInit(): void {

    this.service.conge = {
      id: 0,
      dateDebut: "null",
      dateFin: "null",
      motif: "null",
      etat: "null",
      idpersonnel: 0,
      personnel: new Personnel

    },

    this.getall();
    this.uow.getall();


  }
  getall() {

    this.service.getall().subscribe(r => {
      this.service.conges = r as any;
      this.t = r as any;
      console.log(r);
    });
  }


  restaurertable(){
    this.getall();
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
      this.uow.getall();    },
      err => {
        console.log(err);
      }
    );
  }
  search(id : number) {

    this.service.get(id).subscribe(res => {


    },
      err => {
        console.log(err);
      }
    );

  }
  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.conges.filter(e => +e.idpersonnel === +this.service.conge.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/conge/details', +this.service.conge.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/conge/details', +this.service.conge.id]);


  }




}

