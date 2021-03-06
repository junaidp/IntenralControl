import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
import { ShowUserService } from "./showUserService";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  selected = "";
  constructor(public globals: Globals, private router: Router, public authService: AuthService, public ShowUserService: ShowUserService) {
    if (localStorage.getItem('name') == null && localStorage.getItem('pass') == null) {
      this.router.navigate(['/landing']);

    }
  }
  map: Map<string, Map<string, string>>;

  map1: Map<String, String>;

  //for dr
  commencementDate: String;

  presentValue: number;


  clickLease() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntries"
    this.globals.selectedJournal = this.selected

  }

  clickAdoption() {
    //just added console.log which will display the event details in browser on click of the button.
    this.selected = "/journalEntriesfta"

    this.globals.selectedJournal = this.selected
  }
  clickJournal() {
    //just added console.log which will display the event details in browser on click of the button.

    if (this.globals.selectedJournal == "/journalEntries") {

      this.router.navigate(['/journalEntries']);
    }
    if (this.globals.selectedJournal == "/journalEntriesfta") {
      this.router.navigate(['/journalEntriesfta']);
    }
  }

  ngOnInit() {
    $('#mainNavBar').show();
    this.id = localStorage.getItem('token');
    $(document).ready(function () {
      $('.flexslider').flexslider();
      $("#flexiselDemo4").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
          portrait: {
            changePoint: 480,
            visibleItems: 1
          },
          landscape: {
            changePoint: 640,
            visibleItems: 2
          },
          tablet: {
            changePoint: 960,
            visibleItems: 3
          }
        }
      });
      $("#flexiselDemo5").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
          portrait: {
            changePoint: 480,
            visibleItems: 1
          },
          landscape: {
            changePoint: 640,
            visibleItems: 2
          },
          tablet: {
            changePoint: 960,
            visibleItems: 3
          }
        }
      });
    });

    var data = {
      userId: localStorage.getItem('userId')
      //   year:2019
    };
    console.log(data)
    //alert(JSON.stringify(data))
    this.ShowUserService.showUser(data).then(response => {
      this.map = new Map(Object.entries(response.data));
      console.log(response.data)
      // this.map1 = this.map.get("17");
      // this.presentValue = this.map1[9];
    });
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name');
    localStorage.removeItem('pass');
    localStorage.removeItem('id');
    localStorage.removeItem('compayId');
    this.router.navigate(['/login']);
  }
}
