import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './shared-components.module';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule, RouterModule, SharedComponentsModule],
  exports: [HeaderComponent, Header2Component],
})
export class ComponentsModule {}
