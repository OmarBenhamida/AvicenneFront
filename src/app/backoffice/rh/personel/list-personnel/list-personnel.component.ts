import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/app/models/Personnels.models';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit {


  id: number;
  marticule: string;
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
  dateNaissance: string;
  lieuNaissance: string;
  sexe: string;
  dateEmbauche: string;
  nbrEnfant: number;
  securiteSocial: string;
  tel: string;
  intituleDiplome: string;
  situationFamiliale: string;

  t: Personnel[] = [];

 // personnel = this.uow.get(this.id);

  constructor( public service: PersonnelService) { }

  ngOnInit(): void {

    // this.service.absence = {

    //   id: 0,
    //   dateAbsence: "",
    //   type: false,
    //   justification: "",
    //   idpersonnel: 0,
    //   personnel : Object

    // },



    this.service.getall();


  }



  restaurertable(){
    this.service.getall();
  }





  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.service.getall();
      console.log(res);
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
      this.service.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.service.getall();
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



}

