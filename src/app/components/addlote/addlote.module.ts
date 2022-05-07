import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddlotePageRoutingModule } from './addlote-routing.module';

import { AddlotePage } from './addlote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddlotePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddlotePage]
})
export class AddlotePageModule {}
