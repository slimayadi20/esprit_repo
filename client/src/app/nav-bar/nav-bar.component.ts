import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoading = false;

  constructor(private router: LocationStrategy, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

  }
  feedback = [];

  add = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    messages: new FormControl('', Validators.required),
  })
  addData() {
    console.log();

    this.api.addNewMessage(this.add.value).subscribe((res: any) => {
      console.log(res);

      window.location.reload();


    }, (err: any) => {
      console.log(err);

    })

  }



}
