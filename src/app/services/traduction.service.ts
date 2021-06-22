import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraductionService {
  lang = 'en';
  languageSubject = new BehaviorSubject(this.lang);
  constructor() {}

  getLanguage() {
    return this.languageSubject;
  }

  setLanguage(choice) {
    console.log(choice);

    this.lang = choice;
    this.languageSubject.next(choice);
  }
}
