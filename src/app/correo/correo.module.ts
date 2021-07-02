import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoPageRoutingModule } from './correo-routing.module';

import { CorreoPage } from './correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CorreoPage]
})
export class CorreoPageModule {}
