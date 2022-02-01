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
      console.log(r);
    });
  }


  restaurertable(){
    this.getall();
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
  selectionChange() {
    // this.t = this.service.conges;
    // this.service.conges = [];
    this.t = this.service.conges.filter(e => +e.idpersonnel === +this.service.conge.idpersonnel);

  }




}

