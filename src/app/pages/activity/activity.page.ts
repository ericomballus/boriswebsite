import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
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
