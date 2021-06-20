

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  country: Observable<Country>;

  borderCountries: Observable<Country[]>;


  constructor( private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country = this.api.getCountryByName(params.country).pipe(
        tap(
          (data)=> console.log(data)
          ),
          mergeMap((res) => {
            this.borderCountries = this.api.getCountriesByCodes(res.borders);

            return of(res);
          })
        );

    });
  }

  displayCurrencies( currencies: Currency[]){
    return currencies.map(currency => currency.name).join(", ");
  }
  displayCurrenciesSympol( currencies: Currency[]){
    return currencies.map(currency => currency.symbol).join(", ");
  }



  displayLanguages( languages: Language[]){
    return languages.map(language => language.name).join(", ");
  }

}
