import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeAttestation } from 'src/app/models/Demandeattestations.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { DemandeAttestationService } from 'src/app/shared/demandeattestation.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-adddemande-attestation',
  templateUrl: './adddemande-attestation.component.html',
  styleUrls: ['./adddemande-attestation.component.css']
})
export class AdddemandeAttestationComponent implements OnInit {

 
  id: number;
  dateDemande: string;
  motif: string;
  statut: string
  t: DemandeAttestation[] = [];
  idpersonnel: number;
  personnel : Personnel;
  demandeAttestation : DemandeAttestation = Object();



 // personnel = this.uow.get(this.id);

  constructor(public service: DemandeAttestationService, public uow: PersonnelService,private router : Router) { }

  ngOnInit(): void {

    

    this.service.getall();
    this.uow.getall();


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
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.service.getall();
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
    this.t = this.service.demandeAttestations.filter(e => +e.idpersonnel === +this.service.demandeAttestation.idpersonnel);

  }

  imprimer() {

    this.router.navigate(['/backoffice/rh/absence/details', +this.service.demandeAttestation.id]);


  }

  details() {

    this.router.navigate(['/backoffice/rh/conge/details', +this.service.demandeAttestation.id]);


  }




}
