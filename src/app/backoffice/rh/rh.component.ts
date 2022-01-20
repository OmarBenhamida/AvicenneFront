import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css',
  '../assets/bootstrap/css/bootstrap.min.css',
  '../assets/fonts/fontawesome-all.min.css',
  '../assets/fonts/font-awesome.min.css',
  '../assets/fonts/fontawesome5-overrides.min.css',
  '../assets/css/dropdown-search-bs4.css',
  '../assets/css/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.css',
  '../assets/css/Multi-step-form.css',
  '../assets/css/Table-With-Search-1.css',
  '../assets/css/Table-With-Search.css']
})
export class RhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  var script4 = document.createElement('script');

  // script.type = 'text/javascript';

  script.src = '../assets/js/theme.js';
  script4.src='../assets/js/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.js';

  head.appendChild(script);
  head.appendChild(script4);
}
}
