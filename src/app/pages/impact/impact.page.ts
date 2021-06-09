import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.page.html',
  styleUrls: ['./impact.page.scss'],
})
export class ImpactPage implements OnInit {
  constructor(public socialMedia: SocialMediaService) {}

  ngOnInit() {}
  openFacebook() {
    // window.open('https://www.facebook.com/1401408870089080', '_system');
    this.socialMedia.openFacebook();
  }

  openTwitter() {
    this.socialMedia.openTwitter();
  }
  openWhatsapp() {
    this.socialMedia.openWhatsapp();
  }
  openInstagram() {
    this.socialMedia.openInstagram();
  }
}
