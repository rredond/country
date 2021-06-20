import { Country } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private url = "https://restcountries.eu/rest/v2";

  constructor( private http: HttpClient) { }

  getAllCountries(){
    return this.http.get<Country[]>(`${this.url}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.url}/name/${name}`)
      .pipe(map(([res]) => res));
  }


  getCountriesByCodes(codes: string[]) {
    console.log(`${this.url}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.url}/alpha?codes=${codes.join(';')}`
    );
  }
}
