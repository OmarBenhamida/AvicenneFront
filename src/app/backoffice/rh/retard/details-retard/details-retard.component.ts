import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Retard } from 'src/app/models/Retards.models';
import { PersonnelService } from 'src/app/shared/personnel.service';
import { RetardService } from 'src/app/shared/retard.service';

@Component({
  selector: 'app-details-retard',
  templateUrl: './details-retard.component.html',
  styleUrls: ['./details-retard.component.css']
})
export class DetailsRetardComponent implements OnInit {
  o: Retard = this.service.retard;
  id = 0;
  dt = new Date();

 // personnel = this.uow.get(this.id);

  constructor(public service: RetardService, public uow: PersonnelService,private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }
 


  getImage() {
    return  'data:image/jpeg;base64,' + this.o.personnel.img;
  }

}