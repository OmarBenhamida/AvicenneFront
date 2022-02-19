import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddemande-fichepaie',
  templateUrl: './adddemande-fichepaie.component.html',
  styleUrls: ['./adddemande-fichepaie.component.css']
})
export class AdddemandeFichepaieComponent implements OnInit {

  y = new Date().getFullYear()

  years = [...Array(5).keys()].map((e, i) => this.y - i);

  constructor() { }

  ngOnInit(): void {
  }

}
