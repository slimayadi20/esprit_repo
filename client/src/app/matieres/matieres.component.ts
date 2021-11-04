import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {
  id: any;
  isLoading = true;
  matieres: any;

  constructor(private router: LocationStrategy, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    console.log(this.id);

    this.getMoviesDetails();


  }
  getMoviesDetails() {
    this.api.getMatieresById(this.id).toPromise().then((res: any) => {
      console.log(res);

      if (res[0].list) {
        this.matieres = res[0].list;
        this.isLoading = false
      }
    }).catch((err) => {

    })
  }




}





