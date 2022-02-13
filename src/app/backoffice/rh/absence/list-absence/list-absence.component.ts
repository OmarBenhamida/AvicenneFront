import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from 'src/app/models/Absences.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { AbsenceService } from 'src/app/shared/absence.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css','../../../assets/fonts/fontawesome-all.min.css',
  '../../../assets/fonts/font-awesome.min.css',
  '../../../assets/fonts/fontawesome5-overrides.min.css',]
})
export class ListAbsenceComponent implements OnInit {

  id: number;
  dateAbsence: string;
  type: boolean;
  justification: string
  t: Absence[] = [];
  idpersonnel: number;
  personnel : Personnel;
  absenceModifie : Absence = Object();



 // personnel = this.uow.get(this.id);

  constructor(public service: AbsenceService, public uow: PersonnelService,private router : Router) { }

  ngOnInit(): void {

    this.service.absence = {
      id: 0,
      dateAbsence: "null",
      type: true,
      justification: "null",
      idpersonnel: 0,
      personnel: new Personnel

    },

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
    // this.t = this.service.absences;
    // this.service.absences = [];
    this.t = this.service.absences.filter(e => +e.idpersonnel === +this.service.absence.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/absence/details', +this.service.absence.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/absence/details', +this.service.absence.id]);


  }




}

