import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcultivoPageRoutingModule } from './addcultivo-routing.module';

import { AddcultivoPage } from './addcultivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcultivoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddcultivoPage]
})
export class AddcultivoPageModule {}
