import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddoperacionPageRoutingModule } from './addoperacion-routing.module';

import { AddoperacionPage } from './addoperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddoperacionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddoperacionPage]
})
export class AddoperacionPageModule {}
