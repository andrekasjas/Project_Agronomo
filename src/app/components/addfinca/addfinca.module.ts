import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfincaPageRoutingModule } from './addfinca-routing.module';

import { AddfincaPage } from './addfinca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfincaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddfincaPage]
})
export class AddfincaPageModule {}
