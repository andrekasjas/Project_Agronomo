import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionPageRoutingModule } from './operacion-routing.module';

import { OperacionPage } from './operacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacionPageRoutingModule
  ],
  declarations: [OperacionPage]
})
export class OperacionPageModule {}
