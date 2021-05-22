import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  dropdown = false;
  FR = false;
  EN = true;

  public form = [
    { val: 'FR', isChecked: false },
    { val: 'EN', isChecked: true },
  ];
  coverAll: Boolean = true;
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;
  language = 'EN';
  constructor(
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService
  ) {
    this.languageChanged();
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

  removeAllCover() {
    console.log('clic ok');

    this.coverAll = !this.coverAll;
  }
}
