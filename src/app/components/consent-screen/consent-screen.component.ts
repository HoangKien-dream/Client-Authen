import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-consent-screen',
  templateUrl: './consent-screen.component.html',
  styleUrls: ['./consent-screen.component.css']
})
export class ConsentScreenComponent implements OnInit {
  clientId = "Znbx0uMB8q";
  data?: any
  username?: any;
  radioValue: any;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("nhin")
    if (this.username != null) {
      this.getConsent()
    } else {
      this.router.navigate(["login"])
    }
  }

  getConsent() {
    this.authenticationService.getConsentScreen(this.clientId)
      .subscribe({
          next: (response) => {
            this.data = response;
            for (const scope of this.data.scope) {
                 console.log(scope.name)
            }
          },
          error: (e) => console.error(e)
        }
      )
  }
  getAuthCode(){
    this.authenticationService.getAuthentication(this.clientId,this.radioValue)
      .subscribe({
        next:(res)=>{
          console.log(res)
           window.location.assign(`http://localhost:4200/appClient?code=${res.AuthorazationCode}`)
        }
      })
  }
}
