import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FrontofficeComponent } from './frontoffice.component';
import { LocalisationComponent } from './localisation/localisation.component';



@NgModule({
  declarations: [
    AccueilComponent,
    ContactComponent,
    FrontofficeComponent,
    LocalisationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrontofficeModule { }
