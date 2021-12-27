import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
 
  go_to_laboratoire(){ this.route.navigate(['/backoffice/laboratoire']);  }
  go_to_comptabilite(){ this.route.navigate(['/backoffice/comptabilite']);  }
  go_to_stock(){ this.route.navigate(['/backoffice/stock']);  }
  go_to_rh(){ this.route.navigate(['/backoffice/rh']);  }
  go_to_medecin(){ this.route.navigate(['/backoffice/medecin']);  }
  go_to_secretaire(){ this.route.navigate(['/backoffice/secretaire']);  }
  go_to_personnel(){ this.route.navigate(['/backoffice/personnel']);  }
  go_to_authentification(){ this.route.navigate(['/backoffice/authentification']);  }

}
