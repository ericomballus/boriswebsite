import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/services/traduction.service';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuItems = [
    {
      title: 'MENU.Home',
      icon: 'home',
      path: '/',
    },
    /* {
      title: 'Products',
      icon: 'list',
      path: '/products',
    },*/
    {
      title: 'MENU.About',
      icon: 'list',
      path: '/about',
    },

    {
      title: 'Our Team',
      icon: 'list',
      path: '/ourteam',
    },

    {
      title: 'MENU.Activity',
      icon: 'list',
      path: '/activity',
    },
    {
      title: 'MENU.Impact',
      icon: 'list',
      path: '/impact',
    },
    {
      title: 'Contact',
      icon: 'person',
      path: '/contacts',
    },

    /* {
      title: 'Donation',
      icon: 'list',
      path: '/donate',
    },*/
  ];

  title = 'Home';
  selectedLanguage: string;
  constructor(
    private menuCtrl: MenuController,
    private plt: Platform,
    private traduction: TraductionService,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService
  ) {}
  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
    this.languageChanged();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  languageChanged() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.use('en');
    /*if (lang) {
      this.translateConfigService.setLanguage(lang);
    } */
  }

  toggleMenu(width) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  setTitle(title) {
    this.title = title;
  }

  selectLanguage(ev) {
    this.menuCtrl.close();
    console.log(ev.target.value);
    let val = ev.target.value;

    this.translateConfigService.setLanguage(val);
    this.traduction.setLanguage(val);
  }
}
