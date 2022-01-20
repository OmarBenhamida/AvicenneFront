import { Component, OnInit } from '@angular/core';
  import { PostService } from 'src/app/shared/post.service';
import { PersonnelService } from 'src/app/shared/personnel.service';
@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css',
  '../../assets/bootstrap/css/bootstrap.min.css',
  '../../assets/fonts/fontawesome-all.min.css',
  '../../assets/fonts/font-awesome.min.css',
  '../../assets/fonts/fontawesome5-overrides.min.css',
  '../../assets/css/dropdown-search-bs4.css',
  '../../assets/css/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.css',
  '../../assets/css/Multi-step-form.css',
  '../../assets/css/Table-With-Search-1.css',
  '../../assets/css/Table-With-Search.css']
})
export class PosteComponent implements OnInit {

    id: number;
    libelle: string;
    salaireHoraire: number;

    //employes = this.uow.getall();
   // employe = this.uow.get(this.id);

    constructor(public service: PostService, public uow: PersonnelService) { }

    ngOnInit(): void {

      // this.service.post = {

      //   id: 0,
      //   libelle: "",
      //   salaireHoraire: 0,

      // },



        this.service.getall();
      this.uow.getall();


    }




    submit() {
      console.log();
      this.service.post().subscribe(res => {
        this.service.getall();
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

