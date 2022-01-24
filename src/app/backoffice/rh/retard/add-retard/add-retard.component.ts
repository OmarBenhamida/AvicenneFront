import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Retard } from 'src/app/models/Retards.models';
import { PersonnelService } from 'src/app/shared/personnel.service';
import { RetardService } from 'src/app/shared/retard.service';

@Component({
  selector: 'app-add-retard',
  templateUrl: './add-retard.component.html',
  styleUrls: ['./add-retard.component.css']
})
export class AddRetardComponent implements OnInit {


  id: number;
  dateRetard: string;
  type: boolean;
  justification: string
  nbrHeure : number
  t: Retard[] = [];

 // personnel = this.uow.get(this.id);

  constructor(public service: RetardService, public uow: PersonnelService, public router : Router) { }

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
      this.service.retards = r as any;
      this.t = r as any;
      console.log(r);
    });
  }


  restaurertable(){
    this.getall();
  }





  submit() {

    this.router.navigate(['/backoffice/rh/retard']);

    console.log('post is runing');
    this.service.post2().subscribe(res => {
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
    this.t = this.service.retards.filter(e => +e.id_personnel === +this.service.retard.id_personnel);

  }
  RechercheParDate() {

    if (this.service.retard.dateRetard === null) {

      this.t = this.service.retards;

    } else {
      this.t = this.service.retards.filter(e => e.dateRetard === this.service.retard.dateRetard);

    }
  }



}

