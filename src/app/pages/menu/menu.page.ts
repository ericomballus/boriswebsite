import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/',
    },
    /* {
      title: 'Products',
      icon: 'list',
      path: '/products',
    },*/
    {
      title: 'About us',
      icon: 'list',
      path: '/about',
    },

    {
      title: 'Activities',
      icon: 'list',
      path: '/activity',
    },
    {
      title: 'Impact',
      icon: 'information',
      path: '/impact',
    },
    {
      title: 'Contact',
      icon: 'person',
      path: '/contacts',
    },

    {
      title: 'Donation',
      icon: 'list',
      path: '/donate',
    },
  ];

  title = 'Home';

  constructor(private menuCtrl: MenuController, private plt: Platform) {}
  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
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
}
