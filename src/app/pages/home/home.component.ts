import { Country } from './../../models/models';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';




const  REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    searchFilter?: string;
    source: Country[];
    regionFilter?:string;
    regions = REGIONS;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe(countries=>{
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.source;
  }
}
