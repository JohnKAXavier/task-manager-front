import { Component } from '@angular/core';
import { faChartBar, faContactBook, faHand } from '@fortawesome/free-regular-svg-icons';
import { faDashboard, faLocation, faShop, faBox, faMoneyBill, faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faListCheck = faListCheck;
  faPlus = faPlus;

  constructor(private router: Router) { }

  navigateTo(url: string){    
    this.router.navigateByUrl(url);
  }
}
