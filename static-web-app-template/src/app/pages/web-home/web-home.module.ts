import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebHomePageRoutingModule } from './web-home-routing.module';

import { WebHomePage } from './web-home.page';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebHomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [WebHomePage]
})
export class WebHomePageModule {}
