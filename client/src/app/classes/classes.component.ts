import { LocationStrategy } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  inputValue = '';
  socialUser: SocialUser = new SocialUser;
  isLoggedin: boolean = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router, private api: ApiService) { }

  searchForm = new FormGroup({
    query: new FormControl('')
  })

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(() => {
    });
  }


  logOut(): void {
    this.socialAuthService.signOut();
    window.location.reload();

  }




}

