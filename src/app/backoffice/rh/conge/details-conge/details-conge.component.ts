import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/Conges.models';
import { Personnel } from 'src/app/models/Personnels.models';
import { CongeService } from 'src/app/shared/conge.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-details-conge',
  templateUrl: './details-conge.component.html',
  styleUrls: ['./details-conge.component.css']
})
export class DetailsCongeComponent implements OnInit {


  o: Conge = this.service.conge;
  id = 0;
  dt = new Date();

 // personnel = this.uow.get(this.id);

  constructor(public service: CongeService, public uow: PersonnelService,private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }

  getImage() {
    return  'data:image/jpeg;base64,' + this.o.personnel.img;
  }
 



}

