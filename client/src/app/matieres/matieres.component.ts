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
  quotes = ["'On ne change pas une équipe qui gagne.'", "'C'est toujours le bon moment.'", "'Fais toujours de ton mieux même si personne ne regarde.'", "'Votre source de motivation est l'ingrédient qui peut faire toute la différence.'", "'Vouloir c'est pouvoir.'", "'Vous n'êtes pas encore arrivés mais vous êtes plus proche qu'hier.'", "'Programming isn't about what you know; it's about what you can figure out.'- Chris Pine", "'Testing leads to failure, and failure leads to understanding.'- Burt Rutan", "'The best error message is the one that never shows up.'- Thomas Fuchs", "'When something is important enough, you do it even if the odds are not in your favor.'-Elon Musk", "'Some people don't like change, but you need to embrace change if the alternative is disaster.'-Elon Musk", "'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.'-Elon Musk", "'One of the only ways to get out of a tight box is to invent your way out.'-Jeff Bezos", "'Life’s too short to hang out with people who aren’t resourceful.'-Jeff Bizos"];
  quote!: string;
  constructor(private router: LocationStrategy, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    console.log(this.id);

    this.getMatieresDetails();


  }
  getMatieresDetails() {
    this.api.getMatieresById(this.id).toPromise().then((res: any) => {
      console.log(res);

      if (res[0].list) {

        this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.matieres = res[0].list;
        this.isLoading = false
      }
    }).catch((err) => {

    })
  }




}





