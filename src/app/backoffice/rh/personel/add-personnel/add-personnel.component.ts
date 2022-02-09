import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnels.models';
import { Service } from 'src/app/models/Services.models';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {

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
  email: string;
  passeword: string;
  public imagePath : any ;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage:File;


  t: Personnel[] = [];

  // personnel = this.uow.get(this.id);

  constructor(public service: PersonnelService, private router: Router) { }

  ngOnInit(): void {

    this.service.personnel = {
      id: 0,
      nom: "null",
      marticule: "null",
      prenom: "null",
      cin: "null",
      adresse: "null",
      dateNaissance: "null",
      lieuNaissance: "null",
      sexe: "null",
      dateEmbauche: "null",
      nbrEnfant: 0,
      securiteSocial: "null",
      tel: "null",
      intituleDiplome: "null",
      situationFamiliale: "null",
      email: "null",
      passeword: "null",
      img:null

    }

  }

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }



  submit() {
    // @ts-ignore
    var reader = new FileReader();
     var text : String;
    reader.readAsDataURL(this.uploadedImage);
    // @ts-ignore
    reader.onload = (e) => {
                  // @ts-ignore
      console.log(reader.result.toString());
                        // @ts-ignore
                        console.log(reader.result.replace(/^data:image\/[a-z]+;base64,/,''));
            // @ts-ignore
      this.service.personnel.img=reader.result.toString().replace(/^data:image\/[a-z]+;base64,/,'');
      // @ts-ignore
      this.service.post().subscribe(res => {
        this.router.navigate(['/backoffice/rh/personnel']);
      },
        err => {
          console.log(err);
        }
      );    }

  }

  preview(files:any) {

    var mimeType = this.uploadedImage .type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Not Image")
      return;
    }
    // @ts-ignore
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    // @ts-ignore
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
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
    },
      err => {
        console.log(err);
      }
    );
  }
  search(id: number) {

    this.service.get(id).subscribe(res => {


    },
      err => {
        console.log(err);
      }
    );

  }




}

