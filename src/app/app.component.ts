import { ApiService } from './services/api.service';
import { ThemeService, Mode } from './services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mode: Observable<Mode>;

  constructor(private themeService: ThemeService, private api:ApiService){

  }

  ngOnInit(){
    this.mode = this.themeService.modes;

  }


  }
