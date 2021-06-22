import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { TraductionService } from 'src/app/services/traduction.service';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.page.html',
  styleUrls: ['./impact.page.scss'],
})
export class ImpactPage implements OnInit {
  constructor(
    public socialMedia: SocialMediaService,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private traduction: TraductionService
  ) {
    this.languageChanged();
  }

  ngOnInit() {}
  openFacebook() {
    // window.open('https://www.facebook.com/1401408870089080', '_system');
    this.socialMedia.openFacebook();
  }

  languageChanged() {
    // this.translate.addLangs(['en', 'fr']);
    // this.translate.use('en');
    this.traduction.getLanguage().subscribe((lang) => {
      this.translateConfigService.setLanguage(lang);
    });
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
