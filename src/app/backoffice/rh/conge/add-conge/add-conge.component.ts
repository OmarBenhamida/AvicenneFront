import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/models/Conges.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { CongeService } from 'src/app/shared/conge.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  id: number;
  dateDebut: string;
  dateFin: string;
  motif: string;
  etat : number;
  idpersonnel: number;
  personnel : Personnel;
  t: Conge[] = [];
  tf: Conge[] = [];



  totalDate =0;
  totalConge =0;

 // personnel = this.uow.get(this.id);

  constructor(public service: CongeService, public uow: PersonnelService,private router: Router) { }

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
      this.tf = r as any;

      console.log(r);
    });
  }

  



  submit() {
   
    this.service.post().subscribe(res => {
      

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
  selectionChange(e : any) {
    console.log("1", +this.tf)

    console.log(e.target.value)
    // this.t = this.service.conges;
    // this.service.conges = [];

    this.tf = this.service.conges.filter(o => +o.personnel.id === +e.target.value);


    console.log("2",+this.tf)

    this.totalDate = 0;
    //this.totalDeffDate();
  }

  dateDeff(d1: string, d2: string) {
    const difference_In_Time = new Date(d2).getTime() - new Date(d1).getTime();

    return difference_In_Time / (1000 * 3600 * 24);
  }

  // totalDeffDate() {
  //   this.tf.filter(e => e.etat === 'Validé').forEach(e => {
  //     const tf = this.dateDeff(e.dateDebut, e.dateFin);
  //     this.totalDate += tf;
  //   });

  //   const uniqYears = [...new Set(this.t.map(e => new Date(e.dateDebut).getFullYear()))];

  //   this.totalConge = uniqYears.length * 30;
  // }
  



  



}

