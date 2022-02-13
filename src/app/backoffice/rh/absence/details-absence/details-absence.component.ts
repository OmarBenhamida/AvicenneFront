import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from 'src/app/models/Absences.models';
import { AbsenceService } from 'src/app/shared/absence.service';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-details-absence',
  templateUrl: './details-absence.component.html',
  styleUrls: ['./details-absence.component.css']
})
export class DetailsAbsenceComponent implements OnInit {

  o: Absence = this.service.absence;
  id = 0;
  dt = new Date();

 // personnel = this.uow.get(this.id);

  constructor(public service: AbsenceService, public uow: PersonnelService,private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }
 


  getImage() {
    return  'data:image/jpeg;base64,' + this.o.personnel.img;
  }

}