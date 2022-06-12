import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private authentication: AuthenticationService,
              private router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    }
    this.authentication.login(data)
      .subscribe({
        next: (respon) => {
          if (respon!=null){
            sessionStorage.setItem("nhin",this.username)
            this.router.navigate(["auth"])
          }
        },
        error: (e) => console.error(e)
      });
  }
}
