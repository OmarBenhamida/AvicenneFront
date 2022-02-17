import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'src/app/models/Demandes.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { DemandeAttestationService } from 'src/app/shared/demandeattestation.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-listdemande-attestation',
  templateUrl: './listdemande-attestation.component.html',
  styleUrls: ['./listdemande-attestation.component.css']
})
export class ListdemandeAttestationComponent implements OnInit {

  id:number;
  dateDemande: string;
  motif:string;
  statut:string;
  idpersonnel: number;
  personnel : Personnel;

  demandeModifie :Demande = Object();

  constructor(public service:  DemandeAttestationService, public uow:  PersonnelService, private router  :  Router) { }

  ngOnInit(): void {
   
  }

}
