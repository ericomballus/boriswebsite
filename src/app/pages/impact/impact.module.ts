import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpactPageRoutingModule } from './impact-routing.module';

import { ImpactPage } from './impact.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpactPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ImpactPage],
})
export class ImpactPageModule {}
