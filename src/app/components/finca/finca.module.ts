import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincaPageRoutingModule } from './finca-routing.module';

import { FincaPage } from './finca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FincaPageRoutingModule
  ],
  declarations: [FincaPage]
})
export class FincaPageModule {}
