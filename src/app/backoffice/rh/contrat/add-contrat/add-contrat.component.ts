import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/models/Contrats.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { ContratService } from 'src/app/shared/contrat.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {


  id: number;
  dateDebut: string;
  dateFin: boolean;
  typeContrat: string;
  dateSignature : string;
  t: Contrat[] = [];
  idpersonnel: number;
  personnel : Personnel;
  contratModifie : Contrat = Object();



 // personnel = this.uow.get(this.id);

  constructor(public service: ContratService, public uow: PersonnelService,private router : Router) { }

  ngOnInit(): void {

    this.service.contrat = {
      id: 0,
      dateDebut: "",
      dateFin: "true",
      typeContrat: "",
      dateSignature : "",
      idpersonnel: 0,
      personnel: new Personnel

    },

    this.getall();
    this.uow.getall();


  }
  getall() {

    this.service.getall().subscribe(r => {
      this.service.contrats = r as any;
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
    // this.t = this.service.contrats;
    // this.service.contrats = [];
    this.t = this.service.contrats.filter(e => +e.idpersonnel === +this.service.contrat.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/contrat/details', +this.service.contrat.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/contrat/details', +this.service.contrat.id]);


  }




}

