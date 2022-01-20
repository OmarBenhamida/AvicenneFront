import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/models/Absences.models';
import { AbsenceService } from 'src/app/shared/absence.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css',
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
export class AbsenceComponent implements OnInit {

  id: number;
  dateAbsence: string;
  type: boolean;
  justification: string;
  t: Absence[] = [];

 // personnel = this.uow.get(this.id);

  constructor(public service: AbsenceService, public uow: PersonnelService) { }

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
      this.service.absences = r as any;
      this.t = r as any;
      console.log(r);
    });
  }


  restaurertable(){
    this.getall();
  }





  submit(idp : string) {
    console.log();
    this.service.post(idp).subscribe(res => {
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
    this.t = this.service.absences.filter(e => +e.idpersonnel === +this.service.absence.idpersonnel);

  }
  RechercheParDate() {

    if (this.service.absence.dateAbsence === null) {

      this.t = this.service.absences;

    } else {
      this.t = this.service.absences.filter(e => e.dateAbsence === this.service.absence.dateAbsence);

    }
  }



}

