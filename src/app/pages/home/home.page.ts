import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { ImageLoaderService } from 'src/app/services/image-loader.service';
import { SocialMediaService } from 'src/app/services/social-media.service';
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
    public socialMedia: SocialMediaService
  ) {
    this.coverAll = this.ImageLoader.getData();
    (this.chosenImage = '../../../assets/backg/2.jpg'),
      setInterval(() => {
        this.chosenImage = this.backgroundImages[
          Math.floor(Math.random() * this.backgroundImages.length)
        ];
      }, 30000);
  }

  ngOnInit() {}

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

  intAnimation() {
    const squareB: Animation = this.animationCtrl
      .create()

      // .addElement(coastRef)
      .addElement(document.querySelector('.hero'))
      .duration(2000)
      //.iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.6');
    const squareC: Animation = this.animationCtrl
      .create()

      // .addElement(coastRef)
      .addElement(document.querySelector('.hero'))
      .duration(2000)

      .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
      .fromTo('opacity', '0.6', '1');
    // .fromTo('transform', 'translateX(5px)', 'translateX(0px)');
    /* .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);*/
    squareB.play().then(() => {
      console.log('total coast load');
      squareC.play().then(() => {
        console.log('total coast load');
      });
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
