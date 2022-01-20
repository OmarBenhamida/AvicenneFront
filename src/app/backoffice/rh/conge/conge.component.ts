import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/Conges.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { CongeService } from 'src/app/shared/conge.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css',
  '../../assets/bootstrap/css/bootstrap.min.css',
  '../../assets/fonts/fontawesome-all.min.css',
  '../../assets/fonts/font-awesome.min.css',
  '../../assets/fonts/fontawesome5-overrides.min.css',
  '../../assets/css/dropdown-search-bs4.css',
  '../../assets/css/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.css',
  '../../assets/css/Multi-step-form.css',
  '../../assets/css/Table-With-Search-1.css',
  '../../assets/css/Table-With-Search.css']
})
export class CongeComponent implements OnInit {


  id: number;
  dateDebut: string;
  dateFin: string;
  motif: string;
  etat: string;
  idpersonnel: number;
  personnel : Personnel;
  t: Conge[] = [];

  constructor(public service: CongeService, public uow: PersonnelService) { }

  ngOnInit(): void {

    // this.service.absence = {

    //   id: 0,
    //   dateAbsence: "",
    //   type: false,
    //   justification: "",
    //   idpersonnel: 0,
    //   personnel : Object

    // },



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
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.getall();
    },
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
  // RechercheParDate() {

  //   if (this.service.conge.dateconge === null) {

  //     this.t = this.service.conges;

  //   } else {
  //     this.t = this.service.conges.filter(e => e.dateconge === this.service.conge.dateconge);

  //   }
  // }



}


