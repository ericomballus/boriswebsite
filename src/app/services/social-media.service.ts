import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialMediaService {
  constructor() {}

  openFacebook() {
    window.open('https://www.facebook.com/1401408870089080', '_system');
  }

  openTwitter() {
    window.open('https://www.twitter.com/1401408870089080', '_system');
  }
  openWhatsapp() {
    window.open('https://www.whatsapp.com/1401408870089080', '_system');
  }
  openInstagram() {
    window.open('https://www.instagram.com/1401408870089080', '_system');
  }
}
