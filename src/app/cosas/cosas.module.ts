import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosasPageRoutingModule } from './cosas-routing.module';

import { CosasPage } from './cosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosasPageRoutingModule
  ],
  declarations: [CosasPage]
})
export class CosasPageModule {}
