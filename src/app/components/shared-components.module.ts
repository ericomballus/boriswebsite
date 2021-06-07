import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [HeaderComponent, Header2Component],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [HeaderComponent, Header2Component, TranslateModule, FormsModule],
})
export class SharedComponentsModule {}
