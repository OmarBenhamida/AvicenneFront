import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/models/Contrats.models';
import { ContratService } from 'src/app/shared/contrat.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-details-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {


  o: Contrat = this.service.contrat;
  id = 0;
  dt = new Date();

 // personnel = this.uow.get(this.id);

  constructor(public service: ContratService, public uow: PersonnelService,private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }

  getImage() {
    return  'data:image/jpeg;base64,' + this.o.personnel.img;
  }
 



}

