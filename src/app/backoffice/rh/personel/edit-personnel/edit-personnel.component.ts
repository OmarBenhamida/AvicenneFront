import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnels.models';
import { PersonnelService } from 'src/app/shared/personnel.service';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {

  o: Personnel = this.service.personnel;
  dt = new Date();

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

  public imagePath: any;
  imgURL: any;
  public message: any;
  // @ts-ignore
  uploadedImage: File;


  t: Personnel[] = [];

  // personnel = this.uow.get(this.id);

  constructor(public service: PersonnelService, private router: Router) { }

  ngOnInit(): void {
    this.imgURL=this.getImage();
    console.log(this.imgURL)
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

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  getImage() {
    return  'data:image/jpeg;base64,' + this.service.personnel.img;
  }
  modifier() {
    // @ts-ignore
    var reader = new FileReader();
    var text: String;
    reader.readAsDataURL(this.uploadedImage);
    // @ts-ignore
    reader.onload = (e) => {
      console.log(reader.result?.toString())
      if(this.uploadedImage!=null){
      // @ts-ignore
      this.service.personnel.img = reader.result.toString().replace(/^data:image\/[a-z]+;base64,/, '');
      }

      // @ts-ignore
      this.service.put().subscribe(res => {
        this.service.getall();
        this.router.navigate(['/backoffice/rh/personnel']);
      },
        err => {
          console.log(err);
        }
      );
    }
  }

    preview(files: any) {

      var mimeType = this.uploadedImage.type;
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

