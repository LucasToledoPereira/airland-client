import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ItineraryService } from './services/itinerary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private _it: ItineraryService,
    public auth: AuthService
  ) {
    this.auth.appState$.subscribe(res => {
      console.log(res)

    })
      this.auth.user$.subscribe(user => {
        console.log(user)
        this._it.health();
       /* this.auth.getAccessTokenSilently().subscribe(res => {
          console.log(res)
        })*/
      })
    }

  login() {
    this.auth.loginWithPopup().subscribe(res => {
      debugger
      console.log(res)
    });
  }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
}
