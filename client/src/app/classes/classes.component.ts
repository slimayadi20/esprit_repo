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
  inputValue=''; 
  socialUser: SocialUser = new SocialUser;
  isLoggedin: boolean = false;  

  constructor( 
    private socialAuthService: SocialAuthService,
    private router: Router,private api:ApiService) { }
  classes = [
    {id:1,name:"slim",username:"now"},
    {id:2,name:"slim",username:"now"},
    {id:3,name:"slim",username:"now"},
    {id:4,name:"slim",username:"now"},
  ];
  searchForm = new FormGroup({
    query: new FormControl('')
  })

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(() => {
    });
  }
  searchFor(){
    const q = this.searchForm.value.query;
    console.log(q);
    for (let i = 0; i < this.classes.length; i++) {
      if(this.classes[i].id==q){
        console.log (this.classes[i]);
      }
    }}   
   
  logOut(): void {
    this.socialAuthService.signOut();
    window.location.reload();

  }
   
  
  
  
  }

