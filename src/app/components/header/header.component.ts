import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  dropdown = false;
  about_dropdown = false;
  FR = false;
  EN = true;

  public form = [
    { val: 'FR', isChecked: false },
    { val: 'EN', isChecked: true },
  ];
  coverAll: Boolean = true;
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;
  @ViewChild('aboutbtn', { read: ElementRef }) aboutbtn: ElementRef;
  @ViewChild('sousmenu', { read: ElementRef }) sousmenu: ElementRef;
  language = 'EN';
  constructor(
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private router: Router
  ) {
    this.languageChanged();
    setTimeout(() => {
      // this.getBtnPosition();
    }, 1000);
  }

  ngOnInit() {}
  languageChanged() {
    let lang = localStorage.getItem('language');
    this.translate.addLangs(['en', 'fr']);
    this.translate.use('en');
    /*if (lang) {
      this.translateConfigService.setLanguage(lang);
    } */
  }
  getBtnPosition() {
    const posi = this.aboutbtn.nativeElement.getBoundingClientRect();
    console.log(posi);
    console.log(this.sousmenu);
    console.log(posi.left);
    console.log(parseInt(posi.left));

    this.sousmenu.nativeElement.style.setProperty(
      '--my-var',
      `${parseInt(posi.left)}px`
    );

    this.sousmenu.nativeElement.style.setProperty(
      '--my-top',
      `${parseInt(posi.top)}px`
    );

    // this.sousmenu.nativeElement.style.
  }
  selectLanguage(value) {
    this.dropdown = false;
    this.translateConfigService.setLanguage(value);
    localStorage.setItem('language', value);
    if (value == 'fr') {
      this.FR = true;
      this.EN = false;
      this.language = 'FR';
    }
    if (value == 'en') {
      this.EN = true;
      this.FR = false;
      this.language = 'EN';
    }
  }
  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();

    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (
      xTouch < leftBoundary ||
      xTouch > rightBoundary ||
      yTouch < topBoundary
    ) {
      this.dropdown = false;
    }
  }

  hideAboutDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.aboutbtn.nativeElement.getBoundingClientRect();

    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (
      xTouch < leftBoundary ||
      xTouch > rightBoundary ||
      yTouch < topBoundary
    ) {
      this.about_dropdown = false;
    }
  }

  removeAllCover() {
    console.log('clic ok');

    this.coverAll = !this.coverAll;
  }
  closeSousMenu() {
    console.log('hello');
    this.about_dropdown = false;
  }
}
