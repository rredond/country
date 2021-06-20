import { ThemeService } from './../../services/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private themeService: ThemeService
    ) { }

    toggleMode(){
      this.themeService.toggleMode();
    }

}
