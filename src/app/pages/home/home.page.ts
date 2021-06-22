import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ImageLoaderService } from 'src/app/services/image-loader.service';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { TraductionService } from 'src/app/services/traduction.service';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  highlightSlideOpts = {
    // slidesPerView: 1.05,
    // spaceBetween: 10,
    //centeredSlides: true,
    loop: true,
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  coverAll: any;
  laDate: Date = new Date();
  backgroundImages = [
    '../../../assets/backg/1.jpg',
    '../../../assets/backg/2.jpg',
    '../../../assets/backg/3.jpeg',
    '../../../assets/backg/4.png',
    '../../../assets/backg/5.jpeg',
  ];

  chosenImage: string;

  constructor(
    private http: HttpClient,
    private animationCtrl: AnimationController,
    public ImageLoader: ImageLoaderService,
    public socialMedia: SocialMediaService,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private traduction: TraductionService
  ) {
    this.coverAll = this.ImageLoader.getData();
    (this.chosenImage = '../../../assets/backg/2.jpg'),
      setInterval(() => {
        /* this.chosenImage = this.backgroundImages[
          Math.floor(Math.random() * this.backgroundImages.length)
        ];*/
        let url2 = this.backgroundImages[
          Math.floor(Math.random() * this.backgroundImages.length)
        ];
        // this.intAnimation(this.chosenImage, url2);
        this.chosenImage = url2;
      }, 10000);
    this.languageChanged();
  }

  ngOnInit() {}

  languageChanged() {
    //this.translate.addLangs(['en', 'fr']);
    // this.translate.use('en');
    // this.translateConfigService.setLanguage('en');
    this.traduction.getLanguage().subscribe((lang) => {
      this.translateConfigService.setLanguage(lang);
    });
  }

  removeAllCover() {
    this.ImageLoader.setData();
    this.coverAll = false;
    /* const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector('.hero'))

      .duration(1500)
      // .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    animation.play().then(() => {});
    setTimeout(() => {
      animation.stop();
      this.coverAll = !this.coverAll;
    }, 500);*/
  }

  intAnimation(url1, url2) {
    const squareB: Animation = this.animationCtrl
      .create()

      // .addElement(coastRef)
      .addElement(document.querySelector('.home-main'))

      .duration(1500)
      //.iterations(Infinity)
      // .fromTo('background-image', this.chosenImage, url2)

      .keyframes([
        {
          offset: 0,
          'background-image': url2,
          transform: 'translateX(100px)',
          opacity: '0.9',
        },
        {
          offset: 0.5,
          'background-image': this.chosenImage,
          transform: 'translateX(0px)',
          opacity: '1',
        },
      ]);
    //.iterations(Infinity)  background-image: url('../../assets/BackgroundImages/splash-screen-background.png');
    // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    // .fromTo('opacity', '1', '0.6');
    // const squareC: Animation = this.animationCtrl
    //  .create()

    // .addElement(coastRef)
    // .addElement(document.querySelector('.hero'))
    // .duration(2000)

    // .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
    // .fromTo('opacity', '0.6', '1');
    // .fromTo('transform', 'translateX(5px)', 'translateX(0px)');
    /* .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);*/
    squareB.play().then(() => {
      console.log('total coast load');
      this.chosenImage = url2;
    });
  }

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
