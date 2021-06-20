import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Mode {
  light = "light",
  dark = "dark"

}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private mode: BehaviorSubject<Mode>  = new BehaviorSubject(Mode.light)

  constructor() { }

  get modes(){
    return this.mode.asObservable();
  }

  toggleMode(){
    if (this.mode.value === Mode.dark){
      this.mode.next(Mode.light);
    }else{
      this.mode.next(Mode.dark);
    }
  }
}
