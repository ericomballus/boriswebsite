import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { TraductionService } from 'src/app/services/traduction.service';
import { TranslateConfigService } from 'src/app/translate-config.service';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  public payPalConfig?: IPayPalConfig;
  title = 'simple-bootstarp-validation-angular';
  constructor(
    public socialMedia: SocialMediaService,
    private translateConfigService: TranslateConfigService,
    public translate: TranslateService,
    private traduction: TraductionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.languageChanged(params['language']);
    });
    this.initConfig();
  }
  languageChanged(lang) {
    // this.translate.addLangs(['en', 'fr']);
    // this.translate.use('en');
    this.translateConfigService.setLanguage(lang);
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId:
        'AXY2HyNQYmcTHNtvWC5aa51HduFejczI36fkX3FfuDyQ5X1tY7fsAj6umgwu1KKzHn44_jCtVo8s8tjN', // add paypal clientId here
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: '0.01',
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: '0.01',
                  },
                },
              },
              items: [
                {
                  name: 'The Swag Coder',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: '0.01',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'blue',
        shape: 'rect',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  validate() {
    var form = document.getElementsByClassName(
      'needs-validation'
    )[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
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
