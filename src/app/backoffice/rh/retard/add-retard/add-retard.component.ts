import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnels.models';
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
  idpersonnel: number;
  personnel : Personnel;
  retardModifie : Retard = Object();



 // personnel = this.uow.get(this.id);

  constructor(public service: RetardService, public uow: PersonnelService,private router : Router) { }

  ngOnInit(): void {

    this.service.retard = {
      id: 0,
      dateRetard: "null",
      type: true,
      justification: "null",
      nbrHeure: 0,
      idpersonnel: 0,
      personnel: new Personnel

    },

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
    // this.t = this.service.retards;
    // this.service.retards = [];
    this.t = this.service.retards.filter(e => +e.idpersonnel === +this.service.retard.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/retard/details', +this.service.retard.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/conge/details', +this.service.retard.id]);


  }




}

