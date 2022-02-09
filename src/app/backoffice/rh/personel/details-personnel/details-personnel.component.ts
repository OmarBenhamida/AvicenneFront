import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnels.models';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-details-personnel',
  templateUrl: './details-personnel.component.html',
  styleUrls: ['./details-personnel.component.css']
})
export class DetailsPersonnelComponent implements OnInit {

  o: Personnel = this.service.personnel;
  id = 0;
  dt = new Date();

 // personnel = this.uow.get(this.id);

  constructor(public service: PersonnelService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    
  }
 

  getImage() {
    return  'data:image/jpeg;base64,' + this.o.img;
  }

}

